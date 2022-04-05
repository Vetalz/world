const World = require("./worlds/world");
const AnotherWorld = require("./worlds/anotherWorld");
const {nextYear} = require("./helper/timeHelper");

const year = 100;          // длительность года в мсек
let periodLife = 101;      // время жизни мира в годах
let periodStat = 10;       // переодичность получения статистики в годах

let anotherWorld = new AnotherWorld();
let world = new World(anotherWorld, year, periodLife, periodStat);

(async () => {
  let nextShowStat = periodLife - periodStat
  while (periodLife) {
    await nextYear(year);
    if (nextShowStat === periodLife) {
      console.log(world.getStatistic());
      nextShowStat -= periodStat
    }
    periodLife--;
  }
  // console.log(world.population)
  // console.log('--------------------------')
  // console.log(anotherWorld.population)
})()
