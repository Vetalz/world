module.exports = class Human {
  constructor(name, eyes, maxAge, gender) {
    this.name = name;
    this.gender = gender;
    this.eyes = eyes;
    this.maxAge = maxAge;
    this.age = 0;
    this.parents = [];
    this.children = [];
  }
  growUp() {
    if(this.age >= this.maxAge) {
      throw new Error("Can't grow up")
    }
    this.age++
  }
}

