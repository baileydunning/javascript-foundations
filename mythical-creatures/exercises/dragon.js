class Dragon {
  constructor(name, rider, color, hungry, meal) {
    this.name = name
    this.rider = rider
    this.color = color
    this.hungry = true
    this.meal = 0
  }

  eat() {
      this.meal += 1
      if (this.meal >= 3) {
        return this.hungry = false
      }
    }
  }

module.exports = Dragon
