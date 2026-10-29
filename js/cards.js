/**
 * Flashcard Study Session Engine
 * Handles card queue, spaced-repetition ratings, shuffle, and session stats.
 */

import { storage } from './storage.js';

export class StudySession {
  constructor() {
    this.deckId = null;
    this.queue = [];
    this.currentIndex = 0;
    this.isFlipped = false;
    this.filter = 'all'; // 'all' | 'unmastered' | 'learning'
    this.stats = {
      reviewed: 0,
      gotIt: 0,
      needReview: 0,
      missedCardIds: new Set()
    };
  }

  loadDeck(deck, filter = 'all', shuffle = false) {
    if (!deck) {
      this.queue = [];
      return;
    }
    this.deckId = deck.id;
    this.filter = filter;

    let pool = [...deck.cards];
    if (filter === 'unmastered') {
      pool = pool.filter(c => c.status !== 'mastered');
    } else if (filter === 'learning') {
      pool = pool.filter(c => c.status === 'learning');
    }

    // If filter yields 0 cards but deck has cards, fall back gracefully or keep empty
    if (shuffle && pool.length > 1) {
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
    }

    this.queue = pool;
    this.currentIndex = 0;
    this.isFlipped = false;
    this.stats = {
      reviewed: 0,
      gotIt: 0,
      needReview: 0,
      missedCardIds: new Set()
    };
  }

  getCurrentCard() {
    if (this.currentIndex < 0 || this.currentIndex >= this.queue.length) {
      return null;
    }
    return this.queue[this.currentIndex];
  }

  isComplete() {
    return this.queue.length > 0 && this.currentIndex >= this.queue.length;
  }

  flip() {
    if (!this.getCurrentCard()) return false;
    this.isFlipped = !this.isFlipped;
    return this.isFlipped;
  }

  /**
   * Rate current card and advance
   * @param {'again'|'hard'|'good'} rating
   */
  rateCard(rating) {
    const card = this.getCurrentCard();
    if (!card) return null;

    this.stats.reviewed++;

    let newStatus = card.status;
    if (rating === 'again') {
      newStatus = 'learning';
      this.stats.needReview++;
      this.stats.missedCardIds.add(card.id);

      // Re-insert card 4 spots ahead in the queue (if not already re-queued more than twice)
      card._requeuedCount = (card._requeuedCount || 0) + 1;
      if (card._requeuedCount <= 2) {
        const insertAt = Math.min(this.queue.length, this.currentIndex + 4);
        this.queue.splice(insertAt, 0, { ...card });
      }
    } else if (rating === 'hard') {
      newStatus = 'learning';
      this.stats.needReview++;
      this.stats.missedCardIds.add(card.id);
    } else if (rating === 'good') {
      newStatus = 'mastered';
      this.stats.gotIt++;
    }

    card.status = newStatus;
    storage.updateCard(this.deckId, card.id, { status: newStatus });

    this.currentIndex++;
    this.isFlipped = false;
    return this.getCurrentCard();
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.isFlipped = false;
      return this.getCurrentCard();
    }
    return null;
  }

  nextCardSkip() {
    if (this.currentIndex < this.queue.length - 1) {
      this.currentIndex++;
      this.isFlipped = false;
      return this.getCurrentCard();
    }
    return null;
  }

  startMissedOnlySession(deck) {
    if (!deck) return;
    const missedIds = this.stats.missedCardIds;
    const missedCards = deck.cards.filter(c => missedIds.has(c.id) || c.status === 'learning');
    this.queue = missedCards.map(c => ({ ...c, _requeuedCount: 0 }));
    this.currentIndex = 0;
    this.isFlipped = false;
    this.stats = {
      reviewed: 0,
      gotIt: 0,
      needReview: 0,
      missedCardIds: new Set()
    };
  }
}
