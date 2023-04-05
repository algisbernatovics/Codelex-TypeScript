/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

//1.Clean and Convert to Array
//2.ForEach element if next element length is greater store word in result Varible
//3.Return result

function longestWord(sen: string): string {
  const senInArray: string[] = sen.replace(/[^a-zA-Z\d\s:]/g, " ").split(" ");
  let result: string = senInArray[0];
  senInArray.forEach((element) => {
    if (element.length > result.length) result = element;
  });
  return result;
}

// function longestWord(sen:string){
//     let strSplit = sen.replace(/[^0-9a-zA-Z ]/g,"").split(' ');
//     strSplit.sort((a, b) => b.length - a.length);
//     return strSplit[0];
// }

export { longestWord };
