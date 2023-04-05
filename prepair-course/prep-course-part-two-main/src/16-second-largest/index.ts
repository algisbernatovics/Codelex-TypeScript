/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

//ForEach numbers program save largest and second largest num, return second largest.

function secondLargest(array: number[]): number {
  let largestNum: number = 0;
  let secondLargest:number = 0;
  array.forEach((number) => {
    if (number > largestNum) {
      secondLargest = largestNum;
      largestNum = number;
    }
  });
  return secondLargest;
}

export { secondLargest };

// function secondLargest(array: number[]) {
//     array.sort((a,b)=>a-b).reverse()
//     return array[1]
// }

// export { secondLargest };
