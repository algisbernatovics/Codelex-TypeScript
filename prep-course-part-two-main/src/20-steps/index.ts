/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n:number):string {
    let arr:string[]
    let str:string=''
    for (let i=0 ;i<n;i++){
        str=str+' ';
    }
    for (let i=0 ;i<n;i++){
        arr=str.split('')
        arr[i]='#'
        str=arr.join('')
        console.log(str)
    }
    return str
}
steps(3)

export { steps };
