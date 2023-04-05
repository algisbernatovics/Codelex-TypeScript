/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

//1.Clean
//2.Sort
//3.Compare
//4.If the strings are the same they are anagrams

function anagrams(stringA: string, stringB: string): boolean {
  stringA = stringA.replace(/[^a-zA-Z]/g, "").toLowerCase();
  stringB = stringB.replace(/[^a-zA-Z]/g, "").toLowerCase();
  stringA = stringA.split("").sort().join("");
  stringB = stringB.split("").sort().join("");
  if (stringA.localeCompare(stringB) === 0) return true;
  else return false;
}

export { anagrams };
