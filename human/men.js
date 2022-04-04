const Human = require("./human");

module.exports = class Men extends Human {
  constructor(name, eyes, maxAge) {
    super(name, eyes, maxAge);
    this.gender = 'male';
  }
}