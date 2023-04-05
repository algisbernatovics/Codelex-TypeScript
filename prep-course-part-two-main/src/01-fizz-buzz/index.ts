/**
 * Fizz Buzz
 *
 * Write a program that console logs the numbers
 * from 1 to n. But for multiples of three print
 * “fizz” instead of the number and for the multiples
 * of five prints “buzz”. For numbers which are multiples
 * of both three and five print “fizzbuzz”.
 *
 * Example:
    expect(spy.mock.calls[0][0]).toEqual(1);
    expect(spy.mock.calls[1][0]).toEqual(2);
    expect(spy.mock.calls[2][0]).toEqual("fizz");
    expect(spy.mock.calls[3][0]).toEqual(4);
    expect(spy.mock.calls[4][0]).toEqual("buzz");
    expect(spy.mock.calls[5][0]).toEqual("fizz");
    expect(spy.mock.calls[6][0]).toEqual(7);
    expect(spy.mock.calls[7][0]).toEqual(8);
    expect(spy.mock.calls[8][0]).toEqual("fizz");
    expect(spy.mock.calls[9][0]).toEqual("buzz");
    expect(spy.mock.calls[10][0]).toEqual(11);
    expect(spy.mock.calls[11][0]).toEqual("fizz");
    expect(spy.mock.calls[12][0]).toEqual(13);
    expect(spy.mock.calls[13][0]).toEqual(14);
    expect(spy.mock.calls[14][0]).toEqual("fizzbuzz");
 */

function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) console.log("fizzbuzz");
    else if (i % 3 == 0) console.log("fizz");
    else if (i % 5 == 0) console.log("buzz");
    else console.log(i);
  }
}

export { fizzBuzz };

// function fizzBuzz(n: number) {
//   for (let i = 1; i < n + 1; i++) {
//     switch (i) {
//       case 3:
//         console.log("fizz");
//         break;
//       case 5:
//         console.log("buzz");
//         break;
//       case 6:
//         console.log("fizz");
//         break;
//       case 9:
//         console.log("fizz");
//         break;
//        case 10:
//         console.log("buzz");
//         break;
//       case 12:
//         console.log("fizz");
//         break;
//       case 15:
//         console.log("fizzbuzz");
//         break;
//       default:
//         console.log(i);
//         break;
//     }
//   }
// }
// fizzBuzz(15);
