/**
 * An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
 *
 * For example:
 *
 *  9 is an Armstrong number, because 9 = 9^1 = 9
 *  10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
 *  153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 *  154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
 *
 * Write some code to determine whether a number is an Armstrong number.
 */

//1. Nums to array By one Digit (.map(Number) Calls Number on each value in the array (casting it to a number))
//2. Math (Math.pow(x,y)=x^2):ForLoop x-numArr(i) & y numArr.length
//3. If sum=n it is Armstrong num

function validate(n: number): boolean {
  const numArr:number[] = n.toString().split("").map(Number);
  let sum:number = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += Math.pow(numArr[i], numArr.length);
    console.log(numArr)
  }
  if (n === sum) {
    return true;
  } else {
    return false;
  }
}

export { validate };
