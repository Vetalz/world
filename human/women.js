const Human = require("./human");

module.exports = class Women extends Human {
  constructor(name, eyesColor, maxAge) {
    super(name, eyesColor, maxAge);
    this.gender = 'female';
  }
}
