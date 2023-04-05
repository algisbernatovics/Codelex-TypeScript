export { };

/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */

// You are allowed to edit only this function
function remove(arr: (string | number)[], valueToRemove: string | number): (string | number)[] {
  let indexToRemove = arr.indexOf(valueToRemove)
  let result: (string | number)[] = [...arr];
  result.splice(indexToRemove, 1)
  console.log(arr)
  return result

}
const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];

const newNumbers = remove(numbers, 2);
const newNames = remove(names, "Ellen");

console.log(newNumbers);
console.log(newNames);

/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/
