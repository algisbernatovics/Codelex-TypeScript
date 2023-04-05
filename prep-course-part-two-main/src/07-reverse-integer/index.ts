/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

//The Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument. 
//If the input is 0 or -0, it will be returned as-is.

function reverse(int: number): number {
  return (parseFloat(int.toString().split("").reverse().join("")) * Math.sign(int));
}

export { reverse };
