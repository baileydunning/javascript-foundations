class Hobbit {
  constructor(name, age, adult, old, hasRing) {
    this.name = name
    this.age = 0
    this.adult = false
    this.old = false
      if (this.name === "Frodo") {
        this.hasRing = true
      } else {
        this.hasRing = false
    }
    }

  celebrateBirthday(yearsOld) {
    yearsOld = this.age += 1
    if (this.age > 32) {
      this.adult = true
    }
    if (this.age > 100) {
      this.old = true
    }
  }
}

module.exports = Hobbit
