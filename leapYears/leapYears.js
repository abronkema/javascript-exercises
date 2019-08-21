const leapYears = function(year) {
  // leap year if year % 4 === 0
  // leap year if year % 400 === 0
  // not leap year if year % 100 === 0
  if (year % 400 == 0) {
    return true;
  } else if (year % 4 == 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = leapYears;
