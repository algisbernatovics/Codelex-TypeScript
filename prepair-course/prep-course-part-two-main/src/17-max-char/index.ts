/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

//Determinate maxChar Splitting array by char.

function maxChar(str: string): string {
  let max:number = 0,
    maxChar:string = "";
  str.split("").forEach((element) => {
    if (str.split(element).length > max) {
      max = str.split(element).length;
      maxChar = element;
    }
  });
  return maxChar;
}
export { maxChar };
