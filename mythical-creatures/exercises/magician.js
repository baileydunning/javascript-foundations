class Magician {
  constructor(magician) {
    magician = magician || {}
    this.name = magician.name
    this.topHat = (magician.topHat === undefined) ? true : magician.topHat
    this.confident = false
    this.spellsCasted = 0
    }

  incantation(spell) {
    return `${spell.toUpperCase()}!`
  }

  cast() {
    this.spellsCasted++
    if (this.spellsCasted >= 3) {
      this.confident = true
    }
    if (this.topHat === true) {
      return 'PULL RABBIT FROM TOP HAT'
    } else {
      return 'PULL DOVE FROM SLEEVE'
    }
  }

  performShowStopper() {
    if (this.confident === true) {
      return 'WOW! The magician totally just sawed that person in half!'
    } else {
      return 'Oh no! Practice more before attempting this trick!'
    }
  }
}

module.exports = Magician

// (magician.spellsCasted >= 3) ? true : false
