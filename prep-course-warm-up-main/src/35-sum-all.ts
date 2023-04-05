export { };

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = function (num1: number, num2: number):number {
    let result: number = num1
    for (; num1 <= num2; num1++) {
        result += num1
    }
    return result - 1
};

console.log(sumAll(1, 4)); // Expected output: 10
