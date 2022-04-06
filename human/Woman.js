const Human = require("./Human");

module.exports = class Women extends Human {
  constructor(name, eyes, maxAge) {
    super(name, eyes, maxAge);
    this.gender = 'female';
  }
}
