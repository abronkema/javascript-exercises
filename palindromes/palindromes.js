const palindromes = function(string) {
  let re = /[\W_]/gi;
  const filtered = string
    .split(re)
    .join("")
    .toLowerCase();

  const fwdArray = Array.from(filtered);
  const bwdArray = Array.from(filtered).reverse();

  for (let i = 0; i < fwdArray.length; i++) {
    if (fwdArray[i] !== bwdArray[i]) {
      return false;
    } else {
      return true;
    }
  }
};

module.exports = palindromes;
