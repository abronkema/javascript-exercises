const removeFromArray = function(array, ...args) {
  // get all args into a separate array for comparison to input array.
  let removeItemsFromArray = [...args];
  let newArray = array.filter(function(element) {
    // I only want to keep non-matching elements in this new array
    return !removeItemsFromArray.includes(element);
  });
  return newArray;
};

let arrayOne = [1, 2, 3, "frank", "red"];
console.log(removeFromArray(arrayOne, "frank", 3));

module.exports = removeFromArray;
