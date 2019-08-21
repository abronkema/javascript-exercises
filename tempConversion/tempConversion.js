const ftoc = function(temp) {
  temp = (temp - 32) * eval(5 / 9);
  if (temp.toFixed(1) == 0) {
    return 0;
  } else {
    return parseFloat(temp.toFixed(1));
  }
};

const ctof = function(temp) {
  temp = temp * eval(9 / 5) + 32;
  if (temp.toFixed(1) == 0) {
    return 0;
  } else {
    return parseFloat(temp.toFixed(1));
  }
};

module.exports = {
  ftoc,
  ctof,
};
