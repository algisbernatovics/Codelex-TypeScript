/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

//1.Clean input
//2.Convert to array (Property 'forEach' does not exist on type 'string'.)
//3.Create Acronym varible:string
//4.Build Acronym in ForEach 
//5.Return Acronym

function parse(input: string): string {
  input = input.replace("'", "").replace(/[^a-zA-Z\d\s:]/g, " ");
  const inputArr: string[] = input.split(" ");
  let acronym: string = "";
  inputArr.forEach((element) => {
    acronym += element.charAt(0).toUpperCase();
  });
  return acronym;
}

export { parse };
