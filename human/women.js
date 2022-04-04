const Human = require("./human");

module.exports = class Women extends Human {
  constructor(name, eyes, maxAge) {
    super(name, eyes, maxAge);
    this.gender = 'female';
  }
}
