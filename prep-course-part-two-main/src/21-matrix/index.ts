/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */
class Matrix {
  constructor(private matrix: string) { }

  get rows() {
    let strRows = this.matrix.split('\n');
    let numberRows: Array<Array<number>> = [];
    strRows.forEach(row => {
      let strNumbers = row.split(' ');
      let parsedRow: number[] = [];
      strNumbers.forEach(strNum => {
        parsedRow.push(Number.parseInt(strNum));
      })
      numberRows.push(parsedRow);
    })
    return numberRows;
  }

  get columns() {
    let numberRows: Array<Array<number>> = this.rows;
    let resultArr: Array<Array<number>> = [];
    for (let i = 0; i < numberRows[0].length; i++) {
      resultArr.push(numberRows.map(row => row[i]));
    }
    return resultArr;
  }
}
export { Matrix };
