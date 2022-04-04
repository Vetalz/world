const Men = require("../human/men");
const Women = require("../human/women");
const {getRandomParameter, maleNames, femaleNames, eyeColors, getRandomAge, getRandomEyes, minAges, maxAges, gender} = require("../helper/randomHelper");
module.exports = class World {
  constructor(humans, nextWorld) {
    this.population = [...humans];
    this.nextWorld = nextWorld;
    this.firstColorEyes = [this.population[0].eyes, this.population[1].eyes];
    this.couples = [];
  }
  getStatistic() {
    let male = 0;
    let female = 0;
    let notStandardColorEyes = 0;
    let ages = 0
    let averageAge = 0;
    let population = this.population.length
    for(let people of this.population) {
      if (people.gender === 'male') {
        male++;
      } else {
        female++;
      }
      if (people.eyes !== this.firstColorEyes[0] && people.eyes !== this.firstColorEyes[1]) {
        notStandardColorEyes++;
      }
      ages += people.age
    }
    averageAge = Math.round(ages / population);

    return (`men: ${male}\nwomen: ${female} \
    \nnot standard color eyes: ${notStandardColorEyes} \
    \naverageAge: ${averageAge}\npopulation: ${population} \
    \n----------------------------`);
  }
  life() {
    let indexCandidateToAnotherWorld = []
    for(let i=0; i<this.population.length; i++) {
      let human = this.population[i];
      human.age++;
      if (human.age === human.maxAge) {
        this.goAnotherLife(this.nextWorld, human);
        indexCandidateToAnotherWorld.push(human);
        continue;
      }
      if (human.age >= 18 && human.children.length === 0) {
        this.createCouple(human);
      }
      if (human.children.length !== 0 && human.children[human.children.length-1].age >= 5) {
        this.createCouple(human);
      }
    }
    for (let index of indexCandidateToAnotherWorld) {
      this.population.splice(index, 1);
    }
    this.newLife();
  }
  createCouple (human) {
    if (this.couples.length === 0) {
      this.couples.push([human]);
      return
    }
    for (let pair of this.couples) {
      if (pair.length === 2 || pair[0].gender === human.gender) {
        continue;
      }
      pair[1] = human;
    }
  }
  newLife () {
    if (this.couples.length === 0) {
      return;
    }
    for (let pair of this.couples) {
      if (pair.length < 2) {
        continue;
      }
      this.setNewHuman(pair[0], pair[1]);
    }
    this.couples = []
  }
  setNewHuman (parent1, parent2) {
    let newGender = getRandomParameter(gender);
    let newHuman;
    let newEyes = getRandomEyes(parent1.eyes, parent2.eyes);

    if (newGender === 'male') {
      newHuman = new Men(getRandomParameter(maleNames), newEyes, getRandomAge(minAges, maxAges));
    } else {
      newHuman = new Women(getRandomParameter(femaleNames), newEyes, getRandomAge(minAges, maxAges));
    }
    newHuman.parents = [parent1, parent2];
    parent1.children.push(newHuman);
    parent2.children.push(newHuman);
    this.population.push(newHuman);
  }

  goAnotherLife(anotherWorld, human) {
    anotherWorld.population.push(human);
  }
}
