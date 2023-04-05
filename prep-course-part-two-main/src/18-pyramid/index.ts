/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

let pyramid = (n: number) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    //Left
    for (let k = 1; k <= n - i; k++) {
      str += " ";
    //console.log(`Left${str}`)
    }
    //Middle
    for (let j = 0; j != 2 * i - 1; j++) {
      str += "#";
    //console.log(`Middle${str}`)
    }
    //Right
    for (let k = i + 1; k <= n; k++) {
      str += " ";
    //console.log(`Right${str}`)
    }

    //Row
    console.log(str);
  }
};

export { pyramid };
