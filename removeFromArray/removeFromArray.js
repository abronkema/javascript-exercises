const removeFromArray = function(array, ...args) {
  // push
  let removeArray = [...args];
  let newArray = array.filter(function(element) {
    return !removeArray.includes(element);
  });
  return newArray;
};

let arrayOne = [1, 2, 3, "frank", "red"];
console.log(removeFromArray(arrayOne, "frank", 3));

module.exports = removeFromArray;
