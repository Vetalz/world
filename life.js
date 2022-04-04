const {maleNames, femaleNames, eyeColors, minAges, maxAges, getRandomAge, getRandomParameter} = require("./helper/randomHelper");
const World = require("./worlds/world");
const AnotherWorld = require("./worlds/anotherWorld")
const Men = require("./human/men");
const Women = require("./human/women");

const year = 100;
let periodLife = 100;
let periodStat = 10;

let man = new Men(getRandomParameter(maleNames), getRandomParameter(eyeColors), getRandomAge(minAges, maxAges));
let woman = new Women(getRandomParameter(femaleNames), getRandomParameter(eyeColors), getRandomAge(minAges, maxAges));

let anotherWorld = new AnotherWorld();
let world = new World([man, woman], anotherWorld);

function nextYear(year) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), year);
  })
}

(async () => {
  let nextShowStat = periodLife - periodStat
  while(periodLife >= 0) {
    await nextYear(year);
    world.life()
    if (nextShowStat === periodLife) {
      console.log(world.getStatistic());
      nextShowStat -= periodStat
    }
    periodLife--;
  }
  // console.log(world.population)
  console.log(anotherWorld.population)
})()
