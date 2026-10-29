/**
 * Pinyin Conversion, Tone Mark Formatter, Character Breakdown & Smart Vocab Parser
 */

import { PHRASE_PINYIN, CHAR_PINYIN, CHAR_GLOSSARY } from './pinyin-dict.js';
import { STARTER_DECKS } from './starter-decks.js';

// Map of vowel -> [tone1, tone2, tone3, tone4, tone5]
const TONE_VOWELS = {
  a: ['ā', 'á', 'ǎ', 'à', 'a'],
  e: ['ē', 'é', 'ě', 'è', 'e'],
  i: ['ī', 'í', 'ǐ', 'ì', 'i'],
  o: ['ō', 'ó', 'ǒ', 'ò', 'o'],
  u: ['ū', 'ú', 'ǔ', 'ù', 'u'],
  ü: ['ǖ', 'ǘ', 'ǚ', 'ǜ', 'ü'],
  v: ['ǖ', 'ǘ', 'ǚ', 'ǜ', 'ü']
};

// Build a quick lookup of all known words from starter decks for instant definitions
const KNOWN_WORDS_MAP = new Map();
for (const deck of STARTER_DECKS) {
  for (const card of deck.cards) {
    KNOWN_WORDS_MAP.set(card.hanzi, {
      pinyin: card.pinyin,
      meaning: card.meaning,
      notes: card.notes
    });
  }
}

/**
 * Converts a single numbered pinyin syllable (e.g. "shao1", "lv4", "niu2") to tone-marked pinyin
 */
function syllableNumberToTone(syllable) {
  const match = syllable.match(/^([a-zA-ZüÜvV:]+)([1-5])$/);
  if (!match) return syllable;

  let base = match[1].toLowerCase().replace(/u:|v/g, 'ü');
  const toneIndex = parseInt(match[2], 10) - 1;
  if (toneIndex === 4) return base; // neutral tone 5

  // Standard Pinyin tone placement rules:
  // 1. 'a' or 'e' always takes the tone mark
  // 2. In 'ou', 'o' takes the tone mark
  // 3. Otherwise, the last vowel takes the tone mark
  let targetVowel = null;
  if (base.includes('a')) {
    targetVowel = 'a';
  } else if (base.includes('e')) {
    targetVowel = 'e';
  } else if (base.includes('ou')) {
    targetVowel = 'o';
  } else {
    const vowels = ['i', 'o', 'u', 'ü'];
    for (let i = base.length - 1; i >= 0; i--) {
      if (vowels.includes(base[i])) {
        targetVowel = base[i];
        break;
      }
    }
  }

  if (!targetVowel || !TONE_VOWELS[targetVowel]) return base;
  return base.replace(targetVowel, TONE_VOWELS[targetVowel][toneIndex]);
}

/**
 * Converts numbered pinyin string (e.g. "hong2 shao1 niu2rou4") to tone marks ("hóng shāo niú ròu")
 */
export function convertNumberedPinyin(str) {
  if (!str) return '';
  // Split glued syllables like "hong2shao1" -> "hong2 shao1"
  const spaced = str.replace(/([a-zA-ZüÜvV:]+[1-5])(?=[a-zA-ZüÜvV:])/g, '$1 ');
  return spaced
    .split(/(\s+)/)
    .map(token => {
      if (/^\s+$/.test(token)) return token;
      return syllableNumberToTone(token);
    })
    .join('');
}

/**
 * Generates tone-marked Pinyin for any Chinese string.
 * Uses polyphonic menu dictionary first, then pinyin-pro (if loaded), then offline dictionary fallback.
 */
export function generatePinyin(text) {
  if (!text) return '';
  const clean = text.trim();

  // 1. Exact phrase match in our curated dictionary or starter decks
  if (PHRASE_PINYIN[clean]) return PHRASE_PINYIN[clean];
  if (KNOWN_WORDS_MAP.has(clean)) return KNOWN_WORDS_MAP.get(clean).pinyin;

  // 2. If pinyin-pro is loaded via CDN, use it but apply our culinary polyphonic overrides
  if (typeof window !== 'undefined' && window.pinyinPro && typeof window.pinyinPro.pinyin === 'function') {
    try {
      // Check if any known polyphonic phrase is a substring
      let working = clean;
      const replacements = [];
      const sortedPhrases = Object.keys(PHRASE_PINYIN).sort((a, b) => b.length - a.length);
      for (const phrase of sortedPhrases) {
        if (working.includes(phrase) && phrase.length >= 2) {
          const placeholder = `__PH${replacements.length}__`;
          replacements.push({ placeholder, pinyin: PHRASE_PINYIN[phrase] });
          working = working.replace(phrase, placeholder);
        }
      }

      if (replacements.length === 0) {
        return window.pinyinPro.pinyin(clean, { toneType: 'symbol', type: 'array' }).join(' ');
      }
    } catch (_) {
      // Fall through to offline engine
    }
  }

  // 3. Offline greedy longest-match phrase & character lookup
  const result = [];
  let i = 0;
  while (i < clean.length) {
    let matchedPhrase = false;
    // Try 4, 3, 2 char phrases in PHRASE_PINYIN
    for (let len = Math.min(5, clean.length - i); len >= 2; len--) {
      const sub = clean.slice(i, i + len);
      if (PHRASE_PINYIN[sub]) {
        result.push(PHRASE_PINYIN[sub]);
        i += len;
        matchedPhrase = true;
        break;
      }
    }
    if (matchedPhrase) continue;

    const ch = clean[i];
    if (CHAR_PINYIN[ch]) {
      result.push(CHAR_PINYIN[ch]);
    } else if (typeof window !== 'undefined' && window.pinyinPro && typeof window.pinyinPro.pinyin === 'function') {
      result.push(window.pinyinPro.pinyin(ch, { toneType: 'symbol' }));
    } else if (/[\u4e00-\u9fff]/.test(ch)) {
      result.push('?');
    } else if (!/\s/.test(ch)) {
      result.push(ch);
    }
    i++;
  }

  return result.join(' ').replace(/\s+/g, ' ').trim();
}

/**
 * Returns character-by-character breakdown for a Chinese word/phrase
 * e.g. [{ char: '红', pinyin: 'hóng', gloss: 'red (soy-braised / chili)' }, ...]
 */
export function getCharacterBreakdown(hanzi) {
  if (!hanzi) return [];
  const chars = Array.from(hanzi).filter(ch => /[\u4e00-\u9fff]/.test(ch));
  const phrasePinyinParts = generatePinyin(hanzi).split(/\s+/);

  return chars.map((ch, idx) => {
    const py = phrasePinyinParts[idx] || CHAR_PINYIN[ch] || '';
    const gloss = CHAR_GLOSSARY[ch] || null;
    return { char: ch, pinyin: py, gloss };
  });
}

/**
 * Generates an automatic literal meaning & notes when the user pastes only Chinese characters
 */
export function inferMeaningAndNotes(hanzi) {
  const clean = hanzi.trim();
  if (KNOWN_WORDS_MAP.has(clean)) {
    const known = KNOWN_WORDS_MAP.get(clean);
    return {
      meaning: known.meaning,
      notes: known.notes
    };
  }

  const breakdown = getCharacterBreakdown(clean);
  const glossedChars = breakdown.filter(b => b.gloss);

  if (glossedChars.length > 0) {
    const literalParts = breakdown.map(b => (b.gloss ? b.gloss.split('/')[0].trim() : b.char));
    const notesParts = glossedChars.map(b => `${b.char} (${b.pinyin}) = ${b.gloss}`);
    return {
      meaning: `Literal: ${literalParts.join(' + ')}`,
      notes: notesParts.join(' · ')
    };
  }

  return {
    meaning: '',
    notes: ''
  };
}

/**
 * Checks if a string looks like Pinyin (ASCII letters, tone marks, or tone numbers)
 */
function looksLikePinyin(str) {
  if (!str) return false;
  const s = str.trim();
  if (!s || /[\u4e00-\u9fff]/.test(s)) return false;
  // Contains tone marks or tone numbers after syllables
  if (/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/.test(s)) return true;
  if (/^[a-zA-ZüÜvV:\s]+[1-5](\s+[a-zA-ZüÜvV:]+[1-5])*$/.test(s)) return true;
  return false;
}

/**
 * Smart multi-format vocabulary parser.
 * Supports:
 * 1. Raw Chinese lists (newline, comma, Chinese comma, or space separated)
 * 2. Hanzi - Meaning (or Hanzi : Meaning, Hanzi \t Meaning)
 * 3. Hanzi - Pinyin - Meaning (or TSV / CSV / bracketed formats like "红烧 [hóng shāo] braised")
 */
export function parseVocabInput(rawText) {
  if (!rawText || !rawText.trim()) return [];

  const lines = rawText
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(Boolean);

  const parsedItems = [];

  for (const line of lines) {
    // Case 1: Bracketed format e.g. "红烧肉 (hóng shāo ròu) - Braised pork belly"
    const bracketMatch = line.match(/^([\u4e00-\u9fff\s/·]+)\s*[([【（]([^)\]】）]+)[)\]】）]\s*[-:：—|,\t]?\s*(.*)$/);
    if (bracketMatch) {
      const hanzi = bracketMatch[1].trim();
      const middle = bracketMatch[2].trim();
      const rest = bracketMatch[3].trim();
      const inferred = inferMeaningAndNotes(hanzi);
      let pinyin = '';
      let meaning = '';

      if (looksLikePinyin(middle)) {
        pinyin = convertNumberedPinyin(middle);
        meaning = rest || inferred.meaning;
      } else {
        pinyin = generatePinyin(hanzi);
        meaning = rest ? `${middle} — ${rest}` : middle;
      }

      parsedItems.push({
        hanzi,
        pinyin: pinyin || generatePinyin(hanzi),
        meaning,
        notes: inferred.notes
      });
      continue;
    }

    // Case 2: Delimited format (tab, pipe, dash, colon, semicolon, comma)
    const delimiterRegex = /\t|\s*\|\s*|\s+[-—–]\s+|\s*[:：;；]\s*|\s*,\s*/;
    if (delimiterRegex.test(line)) {
      const parts = line.split(delimiterRegex).map(p => p.trim()).filter(Boolean);

      // Check if all parts are purely Chinese words (e.g. "红烧肉, 糖醋排骨, 水煮鱼")
      const allChineseOnly = parts.every(p => /^[\u4e00-\u9fff]+$/.test(p));
      if (allChineseOnly) {
        for (const word of parts) {
          const inferred = inferMeaningAndNotes(word);
          parsedItems.push({
            hanzi: word,
            pinyin: generatePinyin(word),
            meaning: inferred.meaning,
            notes: inferred.notes
          });
        }
        continue;
      }

      if (parts.length >= 3) {
        const hanzi = parts[0];
        const second = parts[1];
        const third = parts.slice(2).join(' · ');
        const inferred = inferMeaningAndNotes(hanzi);

        if (looksLikePinyin(second) || /^[a-zA-Z\s]+$/.test(second)) {
          parsedItems.push({
            hanzi,
            pinyin: convertNumberedPinyin(second),
            meaning: third,
            notes: inferred.notes
          });
        } else {
          parsedItems.push({
            hanzi,
            pinyin: generatePinyin(hanzi),
            meaning: `${second} (${third})`,
            notes: inferred.notes
          });
        }
        continue;
      }

      if (parts.length === 2) {
        const hanzi = parts[0];
        const second = parts[1];
        const inferred = inferMeaningAndNotes(hanzi);

        if (looksLikePinyin(second)) {
          parsedItems.push({
            hanzi,
            pinyin: convertNumberedPinyin(second),
            meaning: inferred.meaning,
            notes: inferred.notes
          });
        } else {
          parsedItems.push({
            hanzi,
            pinyin: generatePinyin(hanzi),
            meaning: second,
            notes: inferred.notes
          });
        }
        continue;
      }
    }

    // Case 3: Single line with Chinese characters followed by English text without explicit delimiter
    // e.g. "红烧牛肉面 Braised beef noodle soup"
    const hanziEnglishMatch = line.match(/^([\u4e00-\u9fff]+)\s+([a-zA-Z0-9].*)$/);
    if (hanziEnglishMatch) {
      const hanzi = hanziEnglishMatch[1].trim();
      const rest = hanziEnglishMatch[2].trim();
      const inferred = inferMeaningAndNotes(hanzi);
      if (looksLikePinyin(rest)) {
        parsedItems.push({
          hanzi,
          pinyin: convertNumberedPinyin(rest),
          meaning: inferred.meaning,
          notes: inferred.notes
        });
      } else {
        parsedItems.push({
          hanzi,
          pinyin: generatePinyin(hanzi),
          meaning: rest,
          notes: inferred.notes
        });
      }
      continue;
    }

    // Case 4: Pure Chinese words separated by spaces, Chinese commas (，、)
    const chineseTokens = line
      .split(/[\s，、。！？]+/)
      .map(t => t.trim())
      .filter(t => /[\u4e00-\u9fff]/.test(t));

    for (const token of chineseTokens) {
      // Extract only the Chinese characters if any stray punctuation remains
      const cleanHanzi = token.replace(/[^\u4e00-\u9fff]/g, '');
      if (!cleanHanzi) continue;
      const inferred = inferMeaningAndNotes(cleanHanzi);
      parsedItems.push({
        hanzi: cleanHanzi,
        pinyin: generatePinyin(cleanHanzi),
        meaning: inferred.meaning,
        notes: inferred.notes
      });
    }
  }

  return parsedItems;
}
