export { };

/**
 * Implement map function which works similarly as
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * NB! The goal of this exercise is not to call .map inside your own map function,
 * but instead  you have to figure out how Array.prototype.map() works under the hood
 * and recreate the logic yourself.
 */

const map = (number: number[], callbk: (num: number) => number): (number[] | undefined) => {
  let resultArr: number[] = []
  for (let i = 0; i < numArray.length; i++) {
    resultArr[i] = (callbk(number[i]))
    if (numArray.length === i + 1) return resultArr;
  }
};

const numArray = [1, 2, 3];
const doubled = map(numArray, function (number) {
  return number * 2;
});
console.log(doubled); // Expected result: [2, 4, 6]


//A callback function is a function passed 
//into another function as an argument, 
//which is then invoked inside the outer
//function to complete some kind of routine or action.