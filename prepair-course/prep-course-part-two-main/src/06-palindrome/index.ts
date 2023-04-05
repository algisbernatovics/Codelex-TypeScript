/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

//ForLoop Compares the beginning with the end, moving towards the center from both sides

function palindrome(str: string): boolean {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// function palindrome(str: string) {
//   const strInArray: string[] = str.split("");
//   if (strInArray[0] === strInArray[strInArray.length - 1]) {
//     let strInArrayLength: number = strInArray.length - 2;
//     for (let i = 0; i < strInArray.length; i++) {
//       if (strInArray[i + 1] === strInArray[strInArrayLength]) {
//         strInArrayLength -= 1;
//         return true;
//       }
//     }
//   }
//   return false;
// }

export { palindrome };
