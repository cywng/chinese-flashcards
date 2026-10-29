/**
 * Main Application Controller for 点菜通 · Chinese Menu & Vocab Flashcards
 */

import { storage } from './storage.js';
import { StudySession } from './cards.js';
import { speech } from './speech.js';
import {
  generatePinyin,
  getCharacterBreakdown,
  inferMeaningAndNotes,
  parseVocabInput
} from './pinyin.js';

const session = new StudySession();
let settings = storage.getSettings();
let currentPreviewItems = [];
let isMultiSelectMode = false;
const selectedDeckIdsForMulti = new Set();
let activeDeckCategory = 'all';

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(settings.theme);
  applyHanziFont(settings.menuFont);
  speech.rate = Number(settings.speechRate) || 0.88;
  speech.autoPlayOnFlip = settings.autoPlayAudio !== false;

  // Unlock iOS Web Speech API on first user touch/click
  const unlockHandler = () => {
    speech.unlockAudio();
    populateVoiceSelect();
    window.removeEventListener('touchstart', unlockHandler);
    window.removeEventListener('click', unlockHandler);
  };
  window.addEventListener('touchstart', unlockHandler, { passive: true });
  window.addEventListener('click', unlockHandler, { passive: true });

  initNavigation();
  initHeaderControls();
  initStudyControls();
  initTouchGestures();
  initKeyboardShortcuts();
  initPasteView();
  initWordListView();
  initDecksAndSettingsView();
  initModals();
  registerServiceWorker();

  // Start initial study session
  loadActiveDeckIntoStudy(false);
  refreshAllViews();
});

// ==================== TOAST HELPER ====================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2400);
}

// ==================== THEME & FONT CONTROLS ====================
function applyTheme(theme) {
  const resolved = theme === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', resolved);
  const iconEl = document.getElementById('themeIcon');
  if (iconEl) iconEl.textContent = resolved === 'dark' ? '☀️' : '🌙';
}

function applyHanziFont(fontMode) {
  const resolved = fontMode === 'serif' ? 'serif' : 'sans';
  document.documentElement.setAttribute('data-hanzi-font', resolved);
  const btn = document.getElementById('fontToggleBtn');
  const label = document.getElementById('fontToggleLabel');
  if (label) {
    label.textContent = resolved === 'serif' ? '書 Menu Serif' : '字 Sans';
  }
  if (btn) {
    btn.classList.toggle('serif-active', resolved === 'serif');
  }
}

function initHeaderControls() {
  const themeBtn = document.getElementById('themeToggleBtn');
  themeBtn?.addEventListener('click', () => {
    const next = settings.theme === 'dark' ? 'light' : 'dark';
    settings = storage.saveSettings({ theme: next });
    applyTheme(next);
  });

  const fontBtn = document.getElementById('fontToggleBtn');
  fontBtn?.addEventListener('click', () => {
    const next = settings.menuFont === 'serif' ? 'sans' : 'serif';
    settings = storage.saveSettings({ menuFont: next });
    applyHanziFont(next);
    showToast(
      next === 'serif'
        ? '書 Switched to Restaurant Menu Serif font'
        : '字 Switched to Modern Sans-Serif font'
    );
  });

  const headerDeckBtn = document.getElementById('headerDeckBtn');
  headerDeckBtn?.addEventListener('click', () => {
    openDeckSwitcherModal();
  });
}

// ==================== TAB NAVIGATION ====================
function switchTab(targetId) {
  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.toggle('active', sec.id === targetId);
  });
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === targetId);
  });

  if (targetId === 'view-study') {
    renderStudyView();
  } else if (targetId === 'view-paste') {
    populatePasteDeckSelect();
  } else if (targetId === 'view-list') {
    renderWordList();
  } else if (targetId === 'view-decks') {
    renderDecksGrid();
    populateVoiceSelect();
  }
}

function initNavigation() {
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.target);
    });
  });
}

function refreshAllViews() {
  updateHeaderDeckPill();
  renderStudyView();
  populatePasteDeckSelect();
  renderWordList();
  renderDecksGrid();
}

function updateHeaderDeckPill() {
  const deck = storage.getActiveDeck();
  if (!deck) return;
  const iconEl = document.getElementById('headerDeckIcon');
  const nameEl = document.getElementById('headerDeckName');
  const studyDeckBtnLabel = document.getElementById('studyDeckBtnLabel');
  if (iconEl) iconEl.textContent = deck.icon || '🍜';
  if (nameEl) nameEl.textContent = deck.name;
  if (studyDeckBtnLabel) {
    const raw = deck.name.replace(/^[^\s]+\s+/, '').split('(')[0].trim() || deck.name;
    studyDeckBtnLabel.textContent = raw.length > 8 ? raw.slice(0, 8) + '…' : raw;
  }
}

// ==================== STUDY VIEW & FLASHCARD ENGINE ====================
function loadActiveDeckIntoStudy(shuffle = false) {
  const deck = storage.getActiveDeck();
  const filterSelect = document.getElementById('studyFilterSelect');
  const filter = filterSelect ? filterSelect.value : settings.studyFilter || 'all';
  session.loadDeck(deck, filter, shuffle);
  updateHeaderDeckPill();
  renderStudyView();
}

function initStudyControls() {
  const modeHanziBtn = document.getElementById('modeHanziBtn');
  const modeRecallBtn = document.getElementById('modeRecallBtn');

  const updateModeUI = mode => {
    modeHanziBtn?.classList.toggle('active', mode === 'hanzi-first');
    modeRecallBtn?.classList.toggle('active', mode === 'recall-first');
  };
  updateModeUI(settings.studyMode);

  modeHanziBtn?.addEventListener('click', () => {
    settings = storage.saveSettings({ studyMode: 'hanzi-first' });
    updateModeUI('hanzi-first');
    session.isFlipped = false;
    renderStudyView();
  });

  modeRecallBtn?.addEventListener('click', () => {
    settings = storage.saveSettings({ studyMode: 'recall-first' });
    updateModeUI('recall-first');
    session.isFlipped = false;
    renderStudyView();
  });

  document.getElementById('studyDeckSwitchBtn')?.addEventListener('click', () => {
    openDeckSwitcherModal();
  });

  const filterSelect = document.getElementById('studyFilterSelect');
  if (filterSelect) {
    filterSelect.value = settings.studyFilter || 'all';
    filterSelect.addEventListener('change', () => {
      settings = storage.saveSettings({ studyFilter: filterSelect.value });
      loadActiveDeckIntoStudy(false);
    });
  }

  document.getElementById('shuffleDeckBtn')?.addEventListener('click', () => {
    loadActiveDeckIntoStudy(true);
    showToast('🔀 Shuffled study deck');
  });

  // Card flip on click
  const flashcard = document.getElementById('flashcard');
  flashcard?.addEventListener('click', e => {
    // Ignore clicks on buttons inside the card
    if (e.target.closest('button')) return;
    handleCardFlip();
  });

  // Front Helper Buttons (do NOT flip the card!)
  const frontAudioHintBtn = document.getElementById('frontAudioHintBtn');
  frontAudioHintBtn?.addEventListener('click', e => {
    e.stopPropagation();
    const card = session.getCurrentCard();
    if (!card) return;
    frontAudioHintBtn.classList.add('speaking');
    speech.speak(card.hanzi, {
      onEnd: () => frontAudioHintBtn.classList.remove('speaking'),
      onError: () => frontAudioHintBtn.classList.remove('speaking')
    });
  });

  const frontCharPeekBtn = document.getElementById('frontCharPeekBtn');
  frontCharPeekBtn?.addEventListener('click', e => {
    e.stopPropagation();
    const peekBox = document.getElementById('frontPeekBox');
    const card = session.getCurrentCard();
    if (!peekBox || !card) return;

    if (!peekBox.classList.contains('hidden')) {
      peekBox.classList.add('hidden');
      return;
    }

    const breakdown = getCharacterBreakdown(card.hanzi);
    const clues = breakdown
      .map(b => `${b.char} = ${b.gloss || b.pinyin}`)
      .join(' · ');
    peekBox.textContent = clues || `Pinyin: ${card.pinyin}`;
    peekBox.classList.remove('hidden');
  });

  // Back Audio Buttons
  document.getElementById('backSpeakBtn')?.addEventListener('click', e => {
    e.stopPropagation();
    const card = session.getCurrentCard();
    if (card) speech.speak(card.hanzi);
  });

  document.getElementById('backSlowSpeakBtn')?.addEventListener('click', e => {
    e.stopPropagation();
    const card = session.getCurrentCard();
    if (card) speech.speak(card.hanzi, { rate: 0.62 });
  });

  document.getElementById('editCurrentCardBtn')?.addEventListener('click', e => {
    e.stopPropagation();
    const card = session.getCurrentCard();
    if (card) openEditCardModal(session.deckId, card);
  });

  // Rating Buttons
  document.getElementById('rateAgainBtn')?.addEventListener('click', () => handleRateCard('again'));
  document.getElementById('rateHardBtn')?.addEventListener('click', () => handleRateCard('hard'));
  document.getElementById('rateGoodBtn')?.addEventListener('click', () => handleRateCard('good'));

  document.getElementById('prevCardBtn')?.addEventListener('click', () => {
    session.prevCard();
    renderStudyView();
  });

  document.getElementById('nextCardBtn')?.addEventListener('click', () => {
    session.nextCardSkip();
    renderStudyView();
  });

  // Session Complete Actions
  document.getElementById('reviewMissedBtn')?.addEventListener('click', () => {
    const deck = storage.getActiveDeck();
    session.startMissedOnlySession(deck);
    renderStudyView();
  });

  document.getElementById('restartSessionBtn')?.addEventListener('click', () => {
    loadActiveDeckIntoStudy(true);
  });

  document.getElementById('showAllCardsFilterBtn')?.addEventListener('click', () => {
    const filterEl = document.getElementById('studyFilterSelect');
    if (filterEl) filterEl.value = 'all';
    settings = storage.saveSettings({ studyFilter: 'all' });
    loadActiveDeckIntoStudy(false);
  });

  document.getElementById('goToPasteFromEmptyBtn')?.addEventListener('click', () => {
    switchTab('view-paste');
  });
}

function handleCardFlip() {
  const card = session.getCurrentCard();
  if (!card) return;
  const nowFlipped = session.flip();
  renderStudyView();

  // Play Mandarin audio when flipping to the back (if enabled)
  if (nowFlipped && settings.autoPlayAudio !== false) {
    speech.speak(card.hanzi);
  }
}

function handleRateCard(rating) {
  const flashcard = document.getElementById('flashcard');
  if (flashcard) {
    flashcard.classList.add(rating === 'good' ? 'swipe-right' : 'swipe-left');
    setTimeout(() => {
      flashcard.classList.remove('swipe-left', 'swipe-right');
    }, 180);
  }
  session.rateCard(rating);
  renderStudyView();
}

function renderStudyView() {
  const deck = storage.getActiveDeck();
  const stage = document.getElementById('flashcardStage');
  const actionRow = document.getElementById('studyActionRow');
  const completeBox = document.getElementById('sessionCompleteBox');
  const emptyBox = document.getElementById('emptyStudyBox');
  const flashcard = document.getElementById('flashcard');

  if (!deck) return;

  // Calculate overall deck mastery
  const totalDeckCards = deck.cards.length;
  const masteredCount = deck.cards.filter(c => c.status === 'mastered').length;
  const masteryPct = totalDeckCards > 0 ? Math.round((masteredCount / totalDeckCards) * 100) : 0;

  const masteryBadge = document.getElementById('deckMasteryBadge');
  if (masteryBadge) {
    masteryBadge.textContent = `${masteryPct}% Mastered (${masteredCount}/${totalDeckCards})`;
  }

  // Handle empty filter state
  if (session.queue.length === 0) {
    stage?.classList.add('hidden');
    actionRow?.classList.add('hidden');
    completeBox?.classList.add('hidden');
    emptyBox?.classList.remove('hidden');
    document.getElementById('studyCounterText').textContent = '0 / 0';
    document.getElementById('studyProgressBar').style.width = '0%';
    return;
  }

  // Handle session complete state
  if (session.isComplete()) {
    stage?.classList.add('hidden');
    actionRow?.classList.add('hidden');
    emptyBox?.classList.add('hidden');
    completeBox?.classList.remove('hidden');

    document.getElementById('studyProgressBar').style.width = '100%';
    document.getElementById('studyCounterText').textContent = `${session.queue.length} / ${session.queue.length}`;
    document.getElementById('completeSummaryText').textContent = `You completed ${session.stats.reviewed} reviews in "${deck.name}".`;
    document.getElementById('statGotItCount').textContent = String(session.stats.gotIt);
    document.getElementById('statNeedReviewCount').textContent = String(session.stats.needReview);

    const missedCount = session.stats.missedCardIds.size;
    const reviewMissedBtn = document.getElementById('reviewMissedBtn');
    const missedSpan = document.getElementById('missedCountSpan');
    if (missedSpan) missedSpan.textContent = String(missedCount);
    if (reviewMissedBtn) {
      reviewMissedBtn.classList.toggle('hidden', missedCount === 0);
    }
    return;
  }

  // Normal active card state
  stage?.classList.remove('hidden');
  actionRow?.classList.remove('hidden');
  completeBox?.classList.add('hidden');
  emptyBox?.classList.add('hidden');

  const card = session.getCurrentCard();
  const progressPct = Math.round(((session.currentIndex + 1) / session.queue.length) * 100);
  document.getElementById('studyProgressBar').style.width = `${progressPct}%`;
  document.getElementById('studyCounterText').textContent = `Card ${session.currentIndex + 1} of ${session.queue.length}`;

  // Flip state
  flashcard?.classList.toggle('is-flipped', session.isFlipped);

  // Status badge
  const badge = document.getElementById('cardStatusBadge');
  if (badge) {
    badge.className = `status-badge status-${card.status || 'new'}`;
    badge.textContent =
      card.status === 'mastered' ? 'Mastered' : card.status === 'learning' ? 'Tricky' : 'New';
  }

  // Deck origin badge (shown in multi-deck / combined modes)
  const isCombinedGroup = storage.getActiveDeckId().startsWith('group:');
  const originText = card._deckName
    ? `${card._deckIcon || ''} ${card._deckName.replace(/^[^\s]+\s+/, '').split('(')[0]}`.trim()
    : '';

  const frontOriginBadge = document.getElementById('frontDeckOriginBadge');
  const backOriginBadge = document.getElementById('backDeckOriginBadge');
  if (frontOriginBadge) {
    if (isCombinedGroup && originText) {
      frontOriginBadge.textContent = originText;
      frontOriginBadge.classList.remove('hidden');
    } else {
      frontOriginBadge.classList.add('hidden');
    }
  }
  if (backOriginBadge) {
    if (isCombinedGroup && originText) {
      backOriginBadge.textContent = originText;
      backOriginBadge.classList.remove('hidden');
    } else {
      backOriginBadge.classList.add('hidden');
    }
  }

  // Front content based on studyMode ('hanzi-first' vs 'recall-first')
  const frontHanziContainer = document.getElementById('frontHanziContainer');
  const frontRecallContainer = document.getElementById('frontRecallContainer');
  const frontHanziText = document.getElementById('frontHanziText');
  const frontPeekBox = document.getElementById('frontPeekBox');
  const frontCharPeekBtn = document.getElementById('frontCharPeekBtn');

  frontPeekBox?.classList.add('hidden');

  const charLen = Array.from(card.hanzi).length;
  const lenAttr = charLen <= 2 ? '2' : charLen === 3 ? '3' : charLen === 4 ? '4' : 'long';

  if (settings.studyMode === 'recall-first') {
    frontHanziContainer?.classList.add('hidden');
    frontRecallContainer?.classList.remove('hidden');
    frontCharPeekBtn?.classList.add('hidden');
    document.getElementById('frontMeaningText').textContent =
      card.meaning || 'Recall the Chinese word for this item';
    document.getElementById('frontRecallHint').textContent = `${charLen} character${charLen > 1 ? 's' : ''}`;
  } else {
    frontHanziContainer?.classList.remove('hidden');
    frontRecallContainer?.classList.add('hidden');
    frontCharPeekBtn?.classList.remove('hidden');
    if (frontHanziText) {
      frontHanziText.textContent = card.hanzi;
      frontHanziText.setAttribute('data-len', lenAttr);
    }
  }

  // Back of card content
  document.getElementById('backHanziText').textContent = card.hanzi;
  document.getElementById('backPinyinText').textContent = card.pinyin || generatePinyin(card.hanzi);
  document.getElementById('backMeaningText').textContent = card.meaning || 'No English definition added';

  // Character-by-character breakdown chips
  const breakdownSection = document.getElementById('backBreakdownSection');
  const breakdownChips = document.getElementById('backBreakdownChips');
  if (settings.showBreakdown !== false && breakdownSection && breakdownChips) {
    const breakdown = getCharacterBreakdown(card.hanzi);
    if (breakdown.length > 0) {
      breakdownSection.classList.remove('hidden');
      breakdownChips.innerHTML = '';
      breakdown.forEach(item => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'char-chip';
        chip.title = `Tap to hear "${item.char}"`;
        chip.innerHTML = `
          <span class="char-chip-hanzi">${escapeHtml(item.char)}</span>
          <span class="char-chip-py">${escapeHtml(item.pinyin)}</span>
          ${item.gloss ? `<span class="char-chip-gloss">· ${escapeHtml(item.gloss)}</span>` : ''}
        `;
        chip.addEventListener('click', e => {
          e.stopPropagation();
          speech.speak(item.char);
        });
        breakdownChips.appendChild(chip);
      });
    } else {
      breakdownSection.classList.add('hidden');
    }
  } else if (breakdownSection) {
    breakdownSection.classList.add('hidden');
  }

  // Culinary / Heritage Notes
  const notesBox = document.getElementById('backNotesBox');
  const notesText = document.getElementById('backNotesText');
  if (card.notes && notesBox && notesText) {
    notesBox.classList.remove('hidden');
    notesText.textContent = card.notes;
  } else if (notesBox) {
    notesBox.classList.add('hidden');
  }
}

// ==================== MOBILE TOUCH SWIPE GESTURES ====================
function initTouchGestures() {
  const flashcard = document.getElementById('flashcard');
  if (!flashcard) return;

  let startX = 0;
  let startY = 0;

  flashcard.addEventListener(
    'touchstart',
    e => {
      if (e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    { passive: true }
  );

  flashcard.addEventListener(
    'touchend',
    e => {
      if (e.changedTouches.length !== 1) return;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;

      // Horizontal swipe > 65px and significantly more horizontal than vertical
      if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.6) {
        if (dx > 0) {
          handleRateCard('good');
        } else {
          handleRateCard('again');
        }
      }
    },
    { passive: true }
  );
}

// ==================== KEYBOARD SHORTCUTS ====================
function initKeyboardShortcuts() {
  window.addEventListener('keydown', e => {
    // Ignore when typing in inputs/textareas/modals
    const tag = (e.target?.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    if (!document.getElementById('view-study')?.classList.contains('active')) return;

    if (e.code === 'Space') {
      e.preventDefault();
      handleCardFlip();
    } else if (e.key === '1') {
      handleRateCard('again');
    } else if (e.key === '2') {
      handleRateCard('hard');
    } else if (e.key === '3') {
      handleRateCard('good');
    } else if (e.key === 'a' || e.key === 'A') {
      const card = session.getCurrentCard();
      if (card) speech.speak(card.hanzi);
    } else if (e.key === 'ArrowLeft') {
      session.prevCard();
      renderStudyView();
    } else if (e.key === 'ArrowRight') {
      session.nextCardSkip();
      renderStudyView();
    }
  });
}

// ==================== VIEW 2: PASTE & SMART IMPORT ====================
function populatePasteDeckSelect() {
  const select = document.getElementById('pasteTargetDeckSelect');
  if (!select) return;
  const decks = storage.getDecks();
  const activeId = storage.getActiveDeckId();

  select.innerHTML = '';
  decks.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d.id;
    opt.textContent = `${d.icon || '🍜'} ${d.name} (${d.cards.length} words)`;
    if (d.id === activeId) opt.selected = true;
    select.appendChild(opt);
  });
}

function initPasteView() {
  const textarea = document.getElementById('vocabPasteTextarea');
  const previewSection = document.getElementById('pastePreviewSection');

  document.getElementById('loadSamplePasteBtn')?.addEventListener('click', () => {
    if (!textarea) return;
    textarea.value = [
      '口水鸡 - Sichuan poached chicken in spicy chili sesame sauce',
      '夫妻肺片 - Thinly sliced beef & offal in aromatic chili oil',
      '蒜泥白肉 - Boiled pork belly slices with mashed garlic soy glaze',
      '松鼠桂鱼 - Sweet & sour crispy mandarin fish',
      '樟茶鸭 - Smoked camphor and tea duck',
      '桂花糖藕',
      '铁板鱿鱼',
      '芝士芒芒'
    ].join('\n');
    generatePastePreview();
  });

  document.getElementById('clearPasteBtn')?.addEventListener('click', () => {
    if (textarea) textarea.value = '';
    currentPreviewItems = [];
    previewSection?.classList.add('hidden');
  });

  document.getElementById('parsePreviewBtn')?.addEventListener('click', () => {
    generatePastePreview();
  });

  document.getElementById('quickNewDeckFromPasteBtn')?.addEventListener('click', () => {
    openNewDeckModal();
  });

  document.getElementById('commitImportBtn')?.addEventListener('click', () => {
    commitPasteImport();
  });
}

function generatePastePreview() {
  const textarea = document.getElementById('vocabPasteTextarea');
  const previewSection = document.getElementById('pastePreviewSection');
  const listContainer = document.getElementById('previewListContainer');
  const countSpan = document.getElementById('previewCountSpan');

  if (!textarea || !listContainer || !previewSection) return;
  const raw = textarea.value;
  if (!raw.trim()) {
    showToast('Please paste some Chinese characters first');
    return;
  }

  currentPreviewItems = parseVocabInput(raw);
  if (currentPreviewItems.length === 0) {
    showToast('No Chinese characters found in input');
    return;
  }

  if (countSpan) countSpan.textContent = String(currentPreviewItems.length);
  previewSection.classList.remove('hidden');
  listContainer.innerHTML = '';

  currentPreviewItems.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = 'preview-item';
    row.innerHTML = `
      <div class="preview-item-top">
        <input type="text" class="form-input preview-hanzi-input" data-idx="${idx}" data-field="hanzi" value="${escapeAttr(item.hanzi)}" placeholder="Hanzi" />
        <input type="text" class="form-input preview-pinyin-input" data-idx="${idx}" data-field="pinyin" value="${escapeAttr(item.pinyin)}" placeholder="Pinyin" />
        <button type="button" class="icon-mini-btn preview-speak-btn" data-idx="${idx}" title="Test audio">🔊</button>
        <button type="button" class="icon-mini-btn preview-del-btn" data-idx="${idx}" title="Remove row">✕</button>
      </div>
      <input type="text" class="form-input" data-idx="${idx}" data-field="meaning" value="${escapeAttr(item.meaning)}" placeholder="English meaning / menu description (editable)" />
    `;
    listContainer.appendChild(row);
  });

  // Bind input edits
  listContainer.querySelectorAll('input[data-idx]').forEach(inp => {
    inp.addEventListener('input', e => {
      const i = Number(e.target.dataset.idx);
      const field = e.target.dataset.field;
      if (currentPreviewItems[i] && field) {
        currentPreviewItems[i][field] = e.target.value;
        // If hanzi changed, auto-update pinyin input
        if (field === 'hanzi') {
          const newPy = generatePinyin(e.target.value);
          currentPreviewItems[i].pinyin = newPy;
          const pyInput = listContainer.querySelector(`input[data-idx="${i}"][data-field="pinyin"]`);
          if (pyInput) pyInput.value = newPy;
        }
      }
    });
  });

  listContainer.querySelectorAll('.preview-speak-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = Number(btn.dataset.idx);
      const item = currentPreviewItems[i];
      if (item?.hanzi) speech.speak(item.hanzi);
    });
  });

  listContainer.querySelectorAll('.preview-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = Number(btn.dataset.idx);
      currentPreviewItems.splice(i, 1);
      renderExistingPreviewItems();
    });
  });
}

function renderExistingPreviewItems() {
  const previewSection = document.getElementById('pastePreviewSection');
  const listContainer = document.getElementById('previewListContainer');
  const countSpan = document.getElementById('previewCountSpan');
  if (!listContainer || !previewSection) return;

  if (currentPreviewItems.length === 0) {
    previewSection.classList.add('hidden');
    return;
  }
  if (countSpan) countSpan.textContent = String(currentPreviewItems.length);
  listContainer.innerHTML = '';

  currentPreviewItems.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = 'preview-item';
    row.innerHTML = `
      <div class="preview-item-top">
        <input type="text" class="form-input preview-hanzi-input" data-idx="${idx}" data-field="hanzi" value="${escapeAttr(item.hanzi)}" />
        <input type="text" class="form-input preview-pinyin-input" data-idx="${idx}" data-field="pinyin" value="${escapeAttr(item.pinyin)}" />
        <button type="button" class="icon-mini-btn preview-speak-btn" data-idx="${idx}">🔊</button>
        <button type="button" class="icon-mini-btn preview-del-btn" data-idx="${idx}">✕</button>
      </div>
      <input type="text" class="form-input" data-idx="${idx}" data-field="meaning" value="${escapeAttr(item.meaning)}" placeholder="English meaning" />
    `;
    listContainer.appendChild(row);
  });

  listContainer.querySelectorAll('input[data-idx]').forEach(inp => {
    inp.addEventListener('input', e => {
      const i = Number(e.target.dataset.idx);
      const field = e.target.dataset.field;
      if (currentPreviewItems[i] && field) {
        currentPreviewItems[i][field] = e.target.value;
      }
    });
  });
  listContainer.querySelectorAll('.preview-speak-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = currentPreviewItems[Number(btn.dataset.idx)];
      if (item?.hanzi) speech.speak(item.hanzi);
    });
  });
  listContainer.querySelectorAll('.preview-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPreviewItems.splice(Number(btn.dataset.idx), 1);
      renderExistingPreviewItems();
    });
  });
}

function commitPasteImport() {
  const select = document.getElementById('pasteTargetDeckSelect');
  const targetDeckId = select?.value || storage.getActiveDeckId();
  if (!currentPreviewItems.length) return;

  const { added, updated } = storage.addCardsToDeck(targetDeckId, currentPreviewItems);
  storage.setActiveDeckId(targetDeckId);

  document.getElementById('vocabPasteTextarea').value = '';
  document.getElementById('pastePreviewSection')?.classList.add('hidden');
  currentPreviewItems = [];

  loadActiveDeckIntoStudy(false);
  refreshAllViews();
  switchTab('view-study');
  showToast(`✅ Added ${added} new words${updated ? ` (${updated} updated)` : ''}!`);
}

// ==================== VIEW 3: WORD LIST & SEARCH ====================
function initWordListView() {
  document.getElementById('wordSearchInput')?.addEventListener('input', () => renderWordList());
  document.getElementById('listDeckScopeSelect')?.addEventListener('change', () => renderWordList());
  document.getElementById('listStatusFilterSelect')?.addEventListener('change', () => renderWordList());
  document.getElementById('addSingleWordBtn')?.addEventListener('click', () => {
    openEditCardModal(storage.getActiveDeckId(), null);
  });
}

function renderWordList() {
  const container = document.getElementById('wordListContainer');
  const countBar = document.getElementById('wordListCountBar');
  if (!container) return;

  const query = (document.getElementById('wordSearchInput')?.value || '').trim().toLowerCase();
  const scope = document.getElementById('listDeckScopeSelect')?.value || 'current';
  const statusFilter = document.getElementById('listStatusFilterSelect')?.value || 'all';

  const decks = storage.getDecks();
  const activeDeckId = storage.getActiveDeckId();
  const sourceDecks = scope === 'all' ? decks : decks.filter(d => d.id === activeDeckId);

  const rows = [];
  for (const deck of sourceDecks) {
    for (const card of deck.cards) {
      if (statusFilter !== 'all' && card.status !== statusFilter) continue;
      if (query) {
        const hay = `${card.hanzi} ${card.pinyin} ${card.meaning} ${card.notes || ''}`.toLowerCase();
        if (!hay.includes(query)) continue;
      }
      rows.push({ deck, card });
    }
  }

  if (countBar) {
    countBar.textContent = `Showing ${rows.length} word${rows.length === 1 ? '' : 's'}`;
  }

  container.innerHTML = '';
  if (rows.length === 0) {
    container.innerHTML = `<p class="panel-desc">No matching words found.</p>`;
    return;
  }

  rows.forEach(({ deck, card }) => {
    const item = document.createElement('div');
    item.className = 'word-row';
    item.innerHTML = `
      <div class="word-row-main">
        <div class="word-row-head">
          <span class="word-row-hanzi">${escapeHtml(card.hanzi)}</span>
          <span class="word-row-pinyin">${escapeHtml(card.pinyin)}</span>
          <span class="status-badge status-${card.status || 'new'}">${card.status === 'mastered' ? 'Mastered' : card.status === 'learning' ? 'Tricky' : 'New'}</span>
        </div>
        <div class="word-row-meaning">${escapeHtml(card.meaning || '')}</div>
        ${card.notes ? `<div class="word-row-notes">💡 ${escapeHtml(card.notes)}</div>` : ''}
      </div>
      <div class="word-row-actions">
        <button type="button" class="icon-mini-btn row-speak-btn" title="Listen">🔊</button>
        <button type="button" class="icon-mini-btn row-edit-btn" title="Edit">✏️</button>
        <button type="button" class="icon-mini-btn row-del-btn" title="Delete">🗑️</button>
      </div>
    `;

    item.querySelector('.row-speak-btn')?.addEventListener('click', () => {
      speech.speak(card.hanzi);
    });
    item.querySelector('.row-edit-btn')?.addEventListener('click', () => {
      openEditCardModal(deck.id, card);
    });
    item.querySelector('.row-del-btn')?.addEventListener('click', () => {
      storage.deleteCard(deck.id, card.id);
      loadActiveDeckIntoStudy(false);
      renderWordList();
      showToast(`Deleted "${card.hanzi}"`);
    });

    container.appendChild(item);
  });
}

// ==================== VIEW 4: DECKS & SETTINGS ====================
function initDecksAndSettingsView() {
  document.getElementById('createNewDeckBtn')?.addEventListener('click', () => {
    openNewDeckModal();
  });

  // Settings controls
  const autoPlayToggle = document.getElementById('autoPlayToggle');
  if (autoPlayToggle) {
    autoPlayToggle.checked = settings.autoPlayAudio !== false;
    autoPlayToggle.addEventListener('change', () => {
      settings = storage.saveSettings({ autoPlayAudio: autoPlayToggle.checked });
      speech.autoPlayOnFlip = autoPlayToggle.checked;
    });
  }

  const showBreakdownToggle = document.getElementById('showBreakdownToggle');
  if (showBreakdownToggle) {
    showBreakdownToggle.checked = settings.showBreakdown !== false;
    showBreakdownToggle.addEventListener('change', () => {
      settings = storage.saveSettings({ showBreakdown: showBreakdownToggle.checked });
      renderStudyView();
    });
  }

  const speechRateSelect = document.getElementById('speechRateSelect');
  if (speechRateSelect) {
    speechRateSelect.value = String(settings.speechRate || 0.88);
    speechRateSelect.addEventListener('change', () => {
      const rate = Number(speechRateSelect.value);
      speech.rate = rate;
      settings = storage.saveSettings({ speechRate: rate });
    });
  }

  const voiceSelect = document.getElementById('voiceSelect');
  voiceSelect?.addEventListener('change', () => {
    speech.selectedVoiceURI = voiceSelect.value || null;
  });

  document.getElementById('testVoiceBtn')?.addEventListener('click', () => {
    speech.speak('老板，来一份红烧牛肉面，再来一杯去冰珍珠奶茶！');
  });

  // Quick group launchers in Decks tab
  document.getElementById('launchLessonsOnlyBtn')?.addEventListener('click', () => {
    storage.setActiveDeckId('group:lessons');
    loadActiveDeckIntoStudy(false);
    refreshAllViews();
    switchTab('view-study');
    showToast('📖 Studying Lessons Only');
  });

  document.getElementById('launchMenuOnlyBtn')?.addEventListener('click', () => {
    storage.setActiveDeckId('group:menu');
    loadActiveDeckIntoStudy(false);
    refreshAllViews();
    switchTab('view-study');
    showToast('🍜 Studying All Menu Decks');
  });

  document.getElementById('launchAllDecksBtn')?.addEventListener('click', () => {
    storage.setActiveDeckId('group:all');
    loadActiveDeckIntoStudy(false);
    refreshAllViews();
    switchTab('view-study');
    showToast('🌟 Studying All Decks Combined');
  });

  // Category filter tabs
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeDeckCategory = tab.dataset.cat || 'all';
      renderDecksGrid();
    });
  });

  // Backup & Export
  document.getElementById('exportJsonBtn')?.addEventListener('click', () => {
    const json = storage.exportAllJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hanzi-menu-flashcards-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('📤 Downloaded JSON backup');
  });

  document.getElementById('copyDeckTextBtn')?.addEventListener('click', async () => {
    const text = storage.exportDeckAsText(storage.getActiveDeckId());
    try {
      await navigator.clipboard.writeText(text);
      showToast('📋 Copied active deck to clipboard!');
    } catch (_) {
      showToast('Could not access clipboard');
    }
  });

  document.getElementById('importJsonFileInput')?.addEventListener('change', e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const count = storage.importFromJSON(String(reader.result));
        loadActiveDeckIntoStudy(false);
        refreshAllViews();
        showToast(`✅ Imported ${count} decks!`);
      } catch (err) {
        showToast('❌ Invalid JSON backup file');
      }
    };
    reader.readAsText(file);
  });

  document.getElementById('restoreStartersBtn')?.addEventListener('click', () => {
    storage.restoreStarterDecks();
    loadActiveDeckIntoStudy(false);
    refreshAllViews();
    showToast('🔄 Restored all 5 China Menu starter decks');
  });
}

function populateVoiceSelect() {
  const select = document.getElementById('voiceSelect');
  if (!select) return;
  const voices = speech.loadVoices();
  select.innerHTML = `<option value="">Auto (Best Mandarin Voice)</option>`;
  voices.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.voiceURI;
    opt.textContent = `${v.name} (${v.lang})`;
    if (speech.selectedVoiceURI === v.voiceURI) opt.selected = true;
    select.appendChild(opt);
  });
}

function renderDecksGrid() {
  const container = document.getElementById('decksGridContainer');
  if (!container) return;
  const decks = storage.getDecks();
  const activeId = storage.getActiveDeckId();

  // Update launcher and category tab counts
  const lessonDecks = decks.filter(d => d.category === 'lesson' || /lesson|课|第/i.test(d.name));
  const lessonWords = lessonDecks.reduce((s, d) => s + d.cards.length, 0);
  const menuDecks = decks.filter(d => d.category === 'menu');
  const menuWords = menuDecks.reduce((s, d) => s + d.cards.length, 0);
  const totalWords = decks.reduce((s, d) => s + d.cards.length, 0);

  const lCount = document.getElementById('launcherLessonsCount');
  const mCount = document.getElementById('launcherMenuCount');
  const aCount = document.getElementById('launcherAllCount');
  if (lCount) lCount.textContent = String(lessonWords);
  if (mCount) mCount.textContent = String(menuWords);
  if (aCount) aCount.textContent = String(totalWords);

  const catAll = document.getElementById('catCountAll');
  const catLesson = document.getElementById('catCountLesson');
  const catMenu = document.getElementById('catCountMenu');
  if (catAll) catAll.textContent = String(decks.length);
  if (catLesson) catLesson.textContent = String(lessonDecks.length);
  if (catMenu) catMenu.textContent = String(menuDecks.length);

  // Filter display by category
  let displayDecks = decks;
  if (activeDeckCategory === 'lesson') {
    displayDecks = lessonDecks;
  } else if (activeDeckCategory === 'menu') {
    displayDecks = menuDecks;
  }

  container.innerHTML = '';
  displayDecks.forEach(deck => {
    const total = deck.cards.length;
    const mastered = deck.cards.filter(c => c.status === 'mastered').length;
    const pct = total > 0 ? Math.round((mastered / total) * 100) : 0;

    const cardEl = document.createElement('div');
    cardEl.className = `deck-card ${deck.id === activeId ? 'active-deck' : ''}`;
    cardEl.innerHTML = `
      <div class="deck-card-top">
        <div>
          <div class="deck-card-title">
            <span>${escapeHtml(deck.icon || '🍜')}</span>
            <span>${escapeHtml(deck.name)}</span>
          </div>
          <div class="deck-card-desc">${escapeHtml(deck.description || '')}</div>
        </div>
        <div class="deck-card-btns">
          <button type="button" class="icon-mini-btn deck-reset-btn" title="Reset mastery progress">🔄</button>
          ${decks.length > 1 ? `<button type="button" class="icon-mini-btn deck-delete-btn" title="Delete deck">🗑️</button>` : ''}
        </div>
      </div>
      <div class="progress-bar-track">
        <div class="progress-bar-fill" style="width: ${pct}%"></div>
      </div>
      <div class="deck-card-footer">
        <span>${total} words</span>
        <span>${mastered} mastered (${pct}%)</span>
      </div>
    `;

    cardEl.addEventListener('click', e => {
      if (e.target.closest('button')) return;
      storage.setActiveDeckId(deck.id);
      loadActiveDeckIntoStudy(false);
      refreshAllViews();
      switchTab('view-study');
    });

    cardEl.querySelector('.deck-reset-btn')?.addEventListener('click', e => {
      e.stopPropagation();
      storage.resetDeckProgress(deck.id);
      if (deck.id === storage.getActiveDeckId()) loadActiveDeckIntoStudy(false);
      renderDecksGrid();
      showToast(`Reset progress for "${deck.name}"`);
    });

    cardEl.querySelector('.deck-delete-btn')?.addEventListener('click', e => {
      e.stopPropagation();
      try {
        storage.deleteDeck(deck.id);
        loadActiveDeckIntoStudy(false);
        refreshAllViews();
        showToast(`Deleted deck "${deck.name}"`);
      } catch (err) {
        showToast(err.message);
      }
    });

    container.appendChild(cardEl);
  });
}

// ==================== MODALS ====================
function initModals() {
  // New Deck Modal
  const newDeckModal = document.getElementById('newDeckModal');
  const closeNewDeck = () => newDeckModal?.classList.add('hidden');
  document.getElementById('closeNewDeckModalBtn')?.addEventListener('click', closeNewDeck);
  document.getElementById('cancelNewDeckBtn')?.addEventListener('click', closeNewDeck);

  document.getElementById('newDeckForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('newDeckNameInput')?.value || '';
    const icon = document.getElementById('newDeckIconInput')?.value || '🥢';
    const desc = document.getElementById('newDeckDescInput')?.value || '';
    if (!name.trim()) return;

    const created = storage.createDeck(name, desc, icon);
    closeNewDeck();
    loadActiveDeckIntoStudy(false);
    refreshAllViews();
    showToast(`Created deck "${created.name}"`);
  });

  // Edit / Add Card Modal
  const editCardModal = document.getElementById('editCardModal');
  const closeEditCard = () => editCardModal?.classList.add('hidden');
  document.getElementById('closeEditCardModalBtn')?.addEventListener('click', closeEditCard);
  document.getElementById('cancelEditCardBtn')?.addEventListener('click', closeEditCard);

  document.getElementById('autoFillCardPinyinBtn')?.addEventListener('click', () => {
    const hanzi = document.getElementById('editCardHanziInput')?.value || '';
    if (!hanzi.trim()) return;
    document.getElementById('editCardPinyinInput').value = generatePinyin(hanzi);
    const meaningInput = document.getElementById('editCardMeaningInput');
    const notesInput = document.getElementById('editCardNotesInput');
    const inferred = inferMeaningAndNotes(hanzi);
    if (meaningInput && !meaningInput.value.trim() && inferred.meaning) {
      meaningInput.value = inferred.meaning;
    }
    if (notesInput && !notesInput.value.trim() && inferred.notes) {
      notesInput.value = inferred.notes;
    }
  });

  document.getElementById('editCardForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const cardId = document.getElementById('editCardIdInput')?.value;
    const deckId = document.getElementById('editCardDeckIdInput')?.value || storage.getActiveDeckId();
    const hanzi = (document.getElementById('editCardHanziInput')?.value || '').trim();
    if (!hanzi) return;

    const pinyin = (document.getElementById('editCardPinyinInput')?.value || '').trim() || generatePinyin(hanzi);
    const meaning = (document.getElementById('editCardMeaningInput')?.value || '').trim();
    const notes = (document.getElementById('editCardNotesInput')?.value || '').trim();

    if (cardId) {
      storage.updateCard(deckId, cardId, { hanzi, pinyin, meaning, notes });
      // Also update in active study session queue if present
      const activeCard = session.queue.find(c => c.id === cardId);
      if (activeCard) {
        Object.assign(activeCard, { hanzi, pinyin, meaning, notes });
      }
      showToast(`Updated "${hanzi}"`);
    } else {
      storage.addCardsToDeck(deckId, [{ hanzi, pinyin, meaning, notes }]);
      loadActiveDeckIntoStudy(false);
      showToast(`Added "${hanzi}"`);
    }

    closeEditCard();
    refreshAllViews();
  });

  // Deck Switcher Modal
  document.getElementById('closeDeckSwitcherModalBtn')?.addEventListener('click', closeDeckSwitcherModal);

  document.querySelectorAll('.group-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetGroup = btn.dataset.deckId;
      storage.setActiveDeckId(targetGroup);
      loadActiveDeckIntoStudy(false);
      refreshAllViews();
      closeDeckSwitcherModal();
      showToast(
        targetGroup === 'group:lessons'
          ? '📖 Studying Lessons Only'
          : targetGroup === 'group:menu'
          ? '🍜 Studying All Menu Decks'
          : '🌟 Studying All Decks Combined'
      );
    });
  });

  document.getElementById('toggleMultiSelectModeBtn')?.addEventListener('click', () => {
    isMultiSelectMode = !isMultiSelectMode;
    renderDeckSwitcherModalContent();
  });

  document.getElementById('selectAllDecksBtn')?.addEventListener('click', () => {
    storage.getDecks().forEach(d => selectedDeckIdsForMulti.add(d.id));
    renderDeckSwitcherModalContent();
  });

  document.getElementById('clearSelectedDecksBtn')?.addEventListener('click', () => {
    selectedDeckIdsForMulti.clear();
    renderDeckSwitcherModalContent();
  });

  document.getElementById('applyMultiDeckBtn')?.addEventListener('click', () => {
    if (selectedDeckIdsForMulti.size === 0) {
      showToast('Please select at least one deck');
      return;
    }
    const customId = `group:custom:${Array.from(selectedDeckIdsForMulti).join(',')}`;
    storage.setActiveDeckId(customId);
    loadActiveDeckIntoStudy(false);
    refreshAllViews();
    closeDeckSwitcherModal();
    showToast(`🎛️ Studying ${selectedDeckIdsForMulti.size} selected decks`);
  });
}

function openDeckSwitcherModal() {
  const modal = document.getElementById('deckSwitcherModal');
  if (!modal) return;
  isMultiSelectMode = false;
  selectedDeckIdsForMulti.clear();
  renderDeckSwitcherModalContent();
  modal.classList.remove('hidden');
}

function closeDeckSwitcherModal() {
  const modal = document.getElementById('deckSwitcherModal');
  modal?.classList.add('hidden');
}

function renderDeckSwitcherModalContent() {
  const activeId = storage.getActiveDeckId();
  const decks = storage.getDecks();

  // Counts for groups
  const lessonDecks = decks.filter(d => d.category === 'lesson' || /lesson|课|第/i.test(d.name));
  const lessonCount = lessonDecks.reduce((sum, d) => sum + d.cards.length, 0);

  const menuDecks = decks.filter(d => d.category === 'menu');
  const menuCount = menuDecks.reduce((sum, d) => sum + d.cards.length, 0);

  const totalCount = decks.reduce((sum, d) => sum + d.cards.length, 0);

  const groupLessonsCount = document.getElementById('groupLessonsCount');
  const groupMenuCount = document.getElementById('groupMenuCount');
  const groupAllCount = document.getElementById('groupAllCount');
  if (groupLessonsCount) groupLessonsCount.textContent = `${lessonDecks.length} Lessons (${lessonCount} words)`;
  if (groupMenuCount) groupMenuCount.textContent = `5 Decks (${menuCount} words)`;
  if (groupAllCount) groupAllCount.textContent = `${decks.length} Decks (${totalCount} words)`;

  // Highlight active preset button if active
  document.querySelectorAll('.group-preset-btn').forEach(btn => {
    btn.classList.toggle('active-preset', btn.dataset.deckId === activeId);
  });

  const listContainer = document.getElementById('deckSwitcherList');
  const multiFooter = document.getElementById('multiSelectFooter');
  const multiToggleBtn = document.getElementById('toggleMultiSelectModeBtn');

  if (multiToggleBtn) {
    multiToggleBtn.textContent = isMultiSelectMode ? '✕ Single Mode' : '🎛️ Multi-Select';
  }
  if (multiFooter) {
    multiFooter.classList.toggle('hidden', !isMultiSelectMode);
  }

  if (!listContainer) return;
  listContainer.innerHTML = '';

  decks.forEach(deck => {
    const isChecked = selectedDeckIdsForMulti.has(deck.id);
    const isCurrentActive = deck.id === activeId;

    const item = document.createElement('div');
    item.className = `switcher-deck-item ${isCurrentActive ? 'active-item' : ''}`;
    item.innerHTML = `
      <div class="switcher-deck-info">
        ${
          isMultiSelectMode
            ? `<input type="checkbox" class="switcher-deck-checkbox" data-deck-id="${deck.id}" ${isChecked ? 'checked' : ''} />`
            : `<span class="switcher-deck-icon">${escapeHtml(deck.icon || '🍜')}</span>`
        }
        <div class="switcher-deck-titles">
          <div class="switcher-deck-name">${escapeHtml(deck.name)}</div>
          <div class="switcher-deck-meta">${deck.cards.length} words · ${deck.category === 'lesson' ? '📖 Lesson' : '🍜 Menu'}</div>
        </div>
      </div>
      <div class="switcher-deck-action">
        ${isMultiSelectMode ? (isChecked ? '☑ Selected' : '☐ Tap to pick') : isCurrentActive ? '✓ Active' : 'Select'}
      </div>
    `;

    item.addEventListener('click', () => {
      if (isMultiSelectMode) {
        if (selectedDeckIdsForMulti.has(deck.id)) {
          selectedDeckIdsForMulti.delete(deck.id);
        } else {
          selectedDeckIdsForMulti.add(deck.id);
        }
        renderDeckSwitcherModalContent();
      } else {
        storage.setActiveDeckId(deck.id);
        loadActiveDeckIntoStudy(false);
        refreshAllViews();
        closeDeckSwitcherModal();
        showToast(`Selected "${deck.name}"`);
      }
    });

    listContainer.appendChild(item);
  });

  // Update multi-select count
  const countSpan = document.getElementById('multiDeckSelectedCount');
  if (countSpan) {
    let wordCount = 0;
    decks.filter(d => selectedDeckIdsForMulti.has(d.id)).forEach(d => {
      wordCount += d.cards.length;
    });
    countSpan.textContent = String(wordCount);
  }
}

function openNewDeckModal() {
  const modal = document.getElementById('newDeckModal');
  document.getElementById('newDeckNameInput').value = '';
  document.getElementById('newDeckDescInput').value = '';
  modal?.classList.remove('hidden');
  document.getElementById('newDeckNameInput')?.focus();
}

function openEditCardModal(deckId, card) {
  const modal = document.getElementById('editCardModal');
  document.getElementById('editCardModalTitle').textContent = card ? 'Edit Flashcard' : 'Add New Word';
  document.getElementById('editCardIdInput').value = card?.id || '';
  document.getElementById('editCardDeckIdInput').value = deckId || storage.getActiveDeckId();
  document.getElementById('editCardHanziInput').value = card?.hanzi || '';
  document.getElementById('editCardPinyinInput').value = card?.pinyin || '';
  document.getElementById('editCardMeaningInput').value = card?.meaning || '';
  document.getElementById('editCardNotesInput').value = card?.notes || '';
  modal?.classList.remove('hidden');
}

// ==================== PWA SERVICE WORKER ====================
function registerServiceWorker() {
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      // Ignore registration error in local file preview
    });
  }
}

// ==================== HTML ESCAPE HELPERS ====================
function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, '&#39;');
}

