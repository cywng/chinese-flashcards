/**
 * Mandarin Chinese Speech Synthesis Controller (Web Speech API)
 * Works 100% client-side on iOS Safari, Android Chrome, and Desktop browsers.
 */

class SpeechController {
  constructor() {
    this.supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
    this.voices = [];
    this.selectedVoiceURI = null;
    this.rate = 0.88; // Slightly paced for clear tone pronunciation
    this.autoPlayOnFlip = true;
    this.unlocked = false;

    if (this.supported) {
      this.loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    if (!this.supported) return [];
    const allVoices = window.speechSynthesis.getVoices() || [];
    // Filter for Chinese voices (Mandarin simplified/traditional)
    this.voices = allVoices.filter(v => {
      const lang = (v.lang || '').toLowerCase();
      return (
        lang.startsWith('zh') ||
        lang.includes('cmn') ||
        lang.includes('chinese') ||
        v.name.includes('Chinese') ||
        v.name.includes('中文') ||
        v.name.includes('普通话') ||
        v.name.includes('Ting')
      );
    });

    // Sort so zh-CN comes before zh-TW / zh-HK (which might be Cantonese)
    this.voices.sort((a, b) => {
      const score = v => {
        const l = (v.lang || '').toLowerCase();
        if (l === 'zh-cn' || l === 'cmn-hans-cn' || l === 'zh_cn') return 3;
        if (l.includes('cn') || l.includes('hans')) return 2;
        if (l.includes('tw')) return 1;
        return 0;
      };
      return score(b) - score(a);
    });

    return this.voices;
  }

  /**
   * Unlocks Web Speech API on mobile iOS Safari on first touch/click event
   */
  unlockAudio() {
    if (!this.supported || this.unlocked) return;
    try {
      const silent = new SpeechSynthesisUtterance('');
      silent.volume = 0;
      window.speechSynthesis.speak(silent);
      this.unlocked = true;
    } catch (_) {
      // Ignore
    }
  }

  getBestVoice() {
    if (!this.voices.length) this.loadVoices();
    if (this.selectedVoiceURI) {
      const match = this.voices.find(v => v.voiceURI === this.selectedVoiceURI);
      if (match) return match;
    }
    return this.voices[0] || null;
  }

  /**
   * Speaks Mandarin Chinese text
   * @param {string} text - Chinese text to pronounce
   * @param {object} options - { rate, onStart, onEnd, onError }
   */
  speak(text, options = {}) {
    if (!this.supported || !text) {
      if (options.onError) options.onError('Speech synthesis not supported in this browser.');
      return false;
    }

    // Extract Chinese characters or clean out English parentheticals if any
    const cleanText = text.replace(/\([a-zA-Z0-9\s,]+\)/g, '').trim() || text;

    try {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'zh-CN';
      utterance.rate = options.rate || this.rate;
      utterance.pitch = 1.0;

      const voice = this.getBestVoice();
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang || 'zh-CN';
      }

      if (options.onStart) utterance.onstart = options.onStart;
      if (options.onEnd) utterance.onend = options.onEnd;
      if (options.onError) utterance.onerror = options.onError;

      window.speechSynthesis.speak(utterance);
      return true;
    } catch (err) {
      if (options.onError) options.onError(err);
      return false;
    }
  }

  stop() {
    if (this.supported) {
      window.speechSynthesis.cancel();
    }
  }
}

export const speech = new SpeechController();
