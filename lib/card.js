module.exports = class Card {
  constructor (options) {
    this.type = options.type
    this.replaces = options.replaces
    this.combines = options.combines
  }

  canCombine (card) {
    return this.combines.includes(card.type)
  }

  canReplace (card) {
    return this.replaces.includes(card.type)
  }
}
