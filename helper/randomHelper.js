exports.maleNames = ['Andrey', 'Boris', 'Vasily', 'Grigory', 'Dmitry', 'Evgeny', 'Maxim', 'Vladislav', 'Artem', 'Mikhail'];
exports.femaleNames = ['Anna', 'Anastasia', 'Maria', 'Olga', 'Vladislava', 'Tatyana', 'Lyudmila', 'Larisa', 'Victoria', 'Daria'];
exports.eyeColors = ['blue', 'green', 'brown', 'grey'];
exports.minAges = 50;
exports.maxAges = 100;


getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.getRandomAge = getRandomInt;

exports.getRandomParameter = (parameter) => {
  return parameter[getRandomInt(0, parameter.length-1)];
}


