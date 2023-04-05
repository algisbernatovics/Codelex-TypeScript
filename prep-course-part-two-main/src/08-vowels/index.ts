/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

//1.Replace Vowelsises
//2.Return length difference from the original <= That is number of vowels

function vowels(givenStr: string): number {
  const withoutVowels: string = givenStr.replace(/[aeiouAEIOU]/g, "");
  return givenStr.length - withoutVowels.length;
}

// const vowelsis = ["a", "e", "i", "o", "u"]
// function vowels(str: string):number {
//     let count = 0;
//     for (let letter of str.toLowerCase()) {
//         if (vowelsis.includes(letter)) {
//             count++;
//         }
//     }
//     return count
// }

export { vowels };
