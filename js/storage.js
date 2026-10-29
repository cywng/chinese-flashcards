/**
 * LocalStorage Manager for Decks, Cards, Study Progress & Settings
 */

import { STARTER_DECKS } from './starter-decks.js';

const STORAGE_KEYS = {
  DECKS: 'hanzi_menu_decks_v1',
  ACTIVE_DECK: 'hanzi_menu_active_deck_v1',
  SETTINGS: 'hanzi_menu_settings_v1'
};

const DEFAULT_SETTINGS = {
  studyMode: 'hanzi-first', // 'hanzi-first' | 'recall-first'
  menuFont: 'sans',         // 'sans' | 'serif'
  autoPlayAudio: true,      // Auto-speak on card flip (never on front in hanzi-first mode!)
  speechRate: 0.88,
  theme: 'dark',
  studyFilter: 'all',       // 'all' | 'unmastered' | 'learning'
  showBreakdown: true       // Show character-by-character building blocks on card back
};

function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export const storage = {
  getDecks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.DECKS);
      if (!raw) {
        const initial = cloneDeep(STARTER_DECKS);
        this.saveDecks(initial);
        return initial;
      }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        const initial = cloneDeep(STARTER_DECKS);
        this.saveDecks(initial);
        return initial;
      }
      return parsed;
    } catch (_) {
      return cloneDeep(STARTER_DECKS);
    }
  },

  saveDecks(decks) {
    try {
      localStorage.setItem(STORAGE_KEYS.DECKS, JSON.stringify(decks));
    } catch (err) {
      console.error('Failed to save decks to localStorage:', err);
    }
  },

  getActiveDeckId() {
    const decks = this.getDecks();
    const savedId = localStorage.getItem(STORAGE_KEYS.ACTIVE_DECK);
    if (savedId && decks.some(d => d.id === savedId)) {
      return savedId;
    }
    const firstId = decks[0]?.id || 'deck-cooking-flavors';
    localStorage.setItem(STORAGE_KEYS.ACTIVE_DECK, firstId);
    return firstId;
  },

  setActiveDeckId(deckId) {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_DECK, deckId);
  },

  getActiveDeck() {
    const decks = this.getDecks();
    const activeId = this.getActiveDeckId();
    return decks.find(d => d.id === activeId) || decks[0];
  },

  createDeck(name, description = 'Custom vocabulary list', icon = '📝') {
    const decks = this.getDecks();
    const newDeck = {
      id: 'deck-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
      name: name.trim() || 'Custom Vocab List',
      description: description.trim(),
      icon,
      cards: []
    };
    decks.unshift(newDeck);
    this.saveDecks(decks);
    this.setActiveDeckId(newDeck.id);
    return newDeck;
  },

  deleteDeck(deckId) {
    let decks = this.getDecks();
    if (decks.length <= 1) {
      throw new Error('Cannot delete the last remaining deck.');
    }
    decks = decks.filter(d => d.id !== deckId);
    this.saveDecks(decks);
    if (this.getActiveDeckId() === deckId) {
      this.setActiveDeckId(decks[0].id);
    }
    return decks;
  },

  addCardsToDeck(deckId, newCards) {
    const decks = this.getDecks();
    const deck = decks.find(d => d.id === deckId);
    if (!deck) return { added: 0, updated: 0 };

    let added = 0;
    let updated = 0;

    for (const item of newCards) {
      const hanzi = (item.hanzi || '').trim();
      if (!hanzi) continue;

      const existing = deck.cards.find(c => c.hanzi === hanzi);
      if (existing) {
        if (item.pinyin) existing.pinyin = item.pinyin.trim();
        if (item.meaning) existing.meaning = item.meaning.trim();
        if (item.notes) existing.notes = item.notes.trim();
        updated++;
      } else {
        deck.cards.push({
          id: 'card-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7) + '-' + added,
          hanzi,
          pinyin: (item.pinyin || '').trim(),
          meaning: (item.meaning || '').trim(),
          notes: (item.notes || '').trim(),
          status: 'new'
        });
        added++;
      }
    }

    this.saveDecks(decks);
    return { added, updated };
  },

  updateCard(deckId, cardId, updates) {
    const decks = this.getDecks();
    const deck = decks.find(d => d.id === deckId);
    if (!deck) return null;
    const card = deck.cards.find(c => c.id === cardId);
    if (!card) return null;

    Object.assign(card, updates);
    this.saveDecks(decks);
    return card;
  },

  deleteCard(deckId, cardId) {
    const decks = this.getDecks();
    const deck = decks.find(d => d.id === deckId);
    if (!deck) return false;
    deck.cards = deck.cards.filter(c => c.id !== cardId);
    this.saveDecks(decks);
    return true;
  },

  resetDeckProgress(deckId) {
    const decks = this.getDecks();
    const deck = decks.find(d => d.id === deckId);
    if (!deck) return;
    deck.cards.forEach(c => {
      c.status = 'new';
    });
    this.saveDecks(decks);
  },

  restoreStarterDecks() {
    const currentDecks = this.getDecks();
    const starterIds = new Set(STARTER_DECKS.map(d => d.id));
    // Keep custom user decks and restore fresh copies of starter decks
    const customDecks = currentDecks.filter(d => !starterIds.has(d.id));
    const merged = [...customDecks, ...cloneDeep(STARTER_DECKS)];
    this.saveDecks(merged);
    return merged;
  },

  getSettings() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (!raw) return { ...DEFAULT_SETTINGS };
      return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
    } catch (_) {
      return { ...DEFAULT_SETTINGS };
    }
  },

  saveSettings(updates) {
    const current = this.getSettings();
    const next = { ...current, ...updates };
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(next));
    } catch (_) {
      // Ignore
    }
    return next;
  },

  exportAllJSON() {
    const payload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      decks: this.getDecks(),
      settings: this.getSettings()
    };
    return JSON.stringify(payload, null, 2);
  },

  exportDeckAsText(deckId) {
    const decks = this.getDecks();
    const deck = decks.find(d => d.id === deckId) || this.getActiveDeck();
    if (!deck) return '';
    return deck.cards
      .map(c => `${c.hanzi}\t${c.pinyin}\t${c.meaning}${c.notes ? '\t' + c.notes : ''}`)
      .join('\n');
  },

  importFromJSON(jsonString) {
    const data = JSON.parse(jsonString);
    if (data && Array.isArray(data.decks)) {
      this.saveDecks(data.decks);
      if (data.decks[0]) this.setActiveDeckId(data.decks[0].id);
      return data.decks.length;
    }
    throw new Error('Invalid backup file format.');
  }
};
