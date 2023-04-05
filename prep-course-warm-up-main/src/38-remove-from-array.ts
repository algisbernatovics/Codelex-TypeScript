export { };

/*
 * Want another challenge similar to this one?
 * Go back to exercise 15-greatest-number and refactor your previous solution so that
 * the function can accept unlimited number of arguments and still return the largest number.
 */
// const removeFromArray = function (nums: number[], ...secArgs: number[]) {
//     let result: number[] = nums
//     let index: (number) = nums.indexOf(secArgs[0]);
//     if (nums.indexOf(secArgs[0]) !== -1 && secArgs.length === 1) {
//         result.splice(index, 1);
//         return result
//     }
//     if (nums.indexOf(secArgs[0]) === -1 && secArgs.length === 1) {
//         return result;
//     }
//     else
//         var i = 0;
//     while (i < secArgs.length) {
//         if (nums.indexOf(secArgs[i]) === -1) result = result, i++;
//         else
//             index = result.indexOf(secArgs[i]);
//         result.splice(index, 1);
//         i++;
//     }
//     return result
// }
// console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
// console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
//console.log(removeFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 5, 6, 7, 8, 4, 3, 9, 10)); // Expected output: [1]

/*
 * Want another challenge similar to this one?
 * Go back to exercise 15-greatest-number and refactor your previous solution so that
 * the function can accept unlimited number of arguments and still return the largest number.
 */

const removeFromArray = function (nums: number[], ...secArgs: number[]): number[] {
    let result: number[] = nums
    for (let i = 0; i < secArgs.length; i++) {
        let IndexToRemove: number = nums.indexOf(secArgs[i])
        if (IndexToRemove !== -1) {
            result.splice(IndexToRemove, 1);
        }
    }
    return result
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]
console.log(removeFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 5, 6, 7, 8, 4, 3, 9, 10)); // Expected output: [1]