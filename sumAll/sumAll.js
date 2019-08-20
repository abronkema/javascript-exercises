const sumAll = function(startingInt, endingInt) {
  let sum = 0;
  if (typeof startingInt !== "number" || typeof endingInt !== "number") {
    return "ERROR";
  } else if (startingInt < 0 || endingInt < 0) {
    return "ERROR";
  } else if (startingInt > endingInt) {
    [startingInt, endingInt] = [endingInt, startingInt];
  }
  for (i = startingInt; i <= endingInt; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(10, 1));

module.exports = sumAll;
