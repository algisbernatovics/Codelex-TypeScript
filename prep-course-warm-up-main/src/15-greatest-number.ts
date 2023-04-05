export { };

// function greatest(x: number, y: number):number {
//     if (x < y) return y
//     if (x > y) return x
// }

// console.log(greatest(1, 2)); // Expected output: 2
// console.log(greatest(5, 2)); // Expected output: 5


function greatest(...secArgs: number[]): number {
    secArgs.sort((a, b) => a - b)
    return secArgs[secArgs.length - 1]
}

console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
console.log(greatest(5, 2, 2, 6, 8, 99, 2, 345, 7, 45)); // Expected output: 345
