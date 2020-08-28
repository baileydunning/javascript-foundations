class Unicorn {
  constructor(name, color = "white") {
    this.name = name
    this.color = color
  }

  isWhite() {
    return this.color.includes("white")
  }

  says(words) {
    return `**;* ${words} *;**`
  }
}

module.exports = Unicorn
