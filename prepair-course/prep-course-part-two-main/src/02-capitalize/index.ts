/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

//1.Convert to array (Index signature in type 'String' only permits reading.)
//2.ForLoop array indexes and rebuild values
//3.Convert back to string and return result

function capitalize(str: string): string {
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    console.log(arr);
  }
  const result = arr.join(" ");
  return result;
}

// function capitalize(str: string) {
//     const strToArr:string[] = str.split(' ')
//     strToArr.forEach((word, index) => {
//         const firstLetter = word.charAt(0).toUpperCase();
//         const rest = word.slice(1).toLowerCase();
//         strToArr[index] = firstLetter + rest;
//         str= strToArr.join(' ')
//       });
//       return str
// }

export { capitalize };
