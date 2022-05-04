module.exports = {
  INThash: class {

    constructor (digit) {
      if(typeof(digit) !== "number") throw new Error("Digit type must be number!")
      this.digit = digit
    }

    hash () {
      return Math.floor(Math.random() * (this.digit + 1))
    }

  }
}