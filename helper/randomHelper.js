exports.maleNames = ['Andrey', 'Boris', 'Vasily', 'Grigory', 'Dmitry', 'Evgeny', 'Maxim', 'Vladislav', 'Artem', 'Mikhail'];
exports.femaleNames = ['Anna', 'Anastasia', 'Maria', 'Olga', 'Vladislava', 'Tatyana', 'Lyudmila', 'Larisa', 'Victoria', 'Daria'];
const colors = ['blue', 'green', 'brown', 'grey'];
exports.eyeColors = colors;
exports.gender = ['male', 'female']
exports.minAges = 50;
exports.maxAges = 100;


getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.getRandomAge = getRandomInt;

exports.getRandomParameter = (parameter) => {
  return parameter[getRandomInt(0, parameter.length-1)];
}

exports.getRandomEyes = (color1, color2) => {
  let arrColors = colors.filter((c) => c !== color1 && c !== color2)
  let random = getRandomInt(1, 100);
  switch (true) {
    case random < 41: return color1
    case random < 81: return color2
    case random < 91: return arrColors[0]
    case random < 101: return arrColors[1]
  }
}

