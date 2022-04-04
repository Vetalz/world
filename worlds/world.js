module.exports = class World {
  constructor(humans) {
    this.population = [...humans]
  }
  getStatistic() {
    let male = 0;
    let female = 0;
    let firstColorEyes = [this.population[0].eyeColors, this.population[1].eyeColors];
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
      if (people.eyeColors !== firstColorEyes[0] && people.eyeColors !== firstColorEyes[1]) {
        notStandardColorEyes++;
      }
      ages += people.age
    }
    averageAge = ages / this.population.length;

    return (`men: ${male}\nwomen: ${female}\nnot standard color eyes: ${notStandardColorEyes}\naverageAge: ${averageAge}\npopulation: ${population}`);
  }
  life() {

  }
  goAnotherLife(anotherWorld, human) {
    anotherWorld.population.push(...human);
  }
}
