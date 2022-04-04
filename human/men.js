const Human = require("./human");

module.exports = class Men extends Human {
  constructor(name, eyesColor, maxAge) {
    super(name, eyesColor, maxAge);
    this.gender = 'male';
  }
}