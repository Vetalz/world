exports.nextYear = (year) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), year);
  })
}