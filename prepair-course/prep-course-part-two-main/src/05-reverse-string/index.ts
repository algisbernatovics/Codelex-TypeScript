/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

//1.Convert to Array (Property 'reverse' does not exist on type 'string')
//2.Reverse Array,Convert back to string 
//3.Return

function reverse(str: string): string {
  const strInArray: string[] = str.split("");
  return (str = strInArray.reverse().join(""));
}

// function reverse(str: string) {
//   let newString: string = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }

export { reverse };
