class Vampire {
  constructor(name, pet = "bat", thirsty = true) {
    this.name = name
    this.pet = pet
    this.thirsty = thirsty
  }

  drink() {
    return this.thirsty = false
  }
}

module.exports = Vampire
