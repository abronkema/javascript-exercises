const repeatString = function(phrase, repetitions) {
  let phraseString = "";
  if (repetitions < 0) {
    return `ERROR`;
  }
  for (i = 1; i <= repetitions; i++) {
    phraseString += phrase;
  }
  return phraseString;
};

module.exports = repeatString;
