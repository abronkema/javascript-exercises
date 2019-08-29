function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function sum(nums) {
  return nums.reduce((a, b) => a + b, 0);
}

function multiply(nums) {
  return nums.reduce((a, b) => a * b);
}

function power(num, pow) {
  return Math.pow(num, pow);
}

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
