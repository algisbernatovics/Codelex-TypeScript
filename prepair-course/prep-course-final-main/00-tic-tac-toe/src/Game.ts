export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  turn: XO = 'X'
  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    return this.turn;
  }

  getWinner(): XO {
    //Rows
    if (this.getCells()[0] !== '-' && this.getCells()[0] == this.getCells()[1] && this.getCells()[1] === this.getCells()[2]) {
      return this.getCells()[0];
    }
    if (this.getCells()[3] !== '-' && this.getCells()[3] === this.getCells()[4] && this.getCells()[4] === this.getCells()[5]) {
      return this.getCells()[3];
    }
    if (this.getCells()[6] !== '-' && this.getCells()[6] === this.getCells()[7] && this.getCells()[7] === this.getCells()[8]) {
      return this.getCells()[6];
    }
    //Columns
    if (this.getCells()[0] !== '-' && this.getCells()[0] === this.getCells()[3] && this.getCells()[3] === this.getCells()[6]) {
      return this.getCells()[0];
    }
    if (this.getCells()[1] !== '-' && this.getCells()[1] === this.getCells()[4] && this.getCells()[4] === this.getCells()[7]) {
      return this.getCells()[1];
    }
    if (this.getCells()[2] !== '-' && this.getCells()[2] === this.getCells()[5] && this.getCells()[5] === this.getCells()[8]) {
      return this.getCells()[2];
    }
    //Diognales
    if (this.getCells()[0] !== '-' && this.getCells()[0] === this.getCells()[4] && this.getCells()[4] === this.getCells()[8]) {
      return this.getCells()[0];
    }
    if (this.getCells()[2] !== '-' && this.getCells()[2] === this.getCells()[4] && this.getCells()[4] === this.getCells()[6]) {
      return this.getCells()[2];
    }
    return '-';
  }

  isTie(): boolean {
    const allField = this.getCells().find((it) => it === '-');
    const hasNoWinner = this.getWinner() === '-';
    //console.log(allField, hasNoWinner);
    return allField === undefined && hasNoWinner === true;
  }

  onClick(i: number): void {
    //If cell is not empty do nothing.
    if (this.cells[i] !== '-') {
      return
    }
    //This empty clicked cell = Turn X or O
    this.cells[i] = this.getTurn()
    //Find empty Cells, Take Random Cell for computer Turn
    let emptyCells: number[] = []
    this.cells.forEach((element, index) => { if (element === '-') { emptyCells.push(index) } })
    this.cells[emptyCells[Math.floor(Math.random() * emptyCells.length)]] = 'O'

    //this.turn = this.getTurn() === 'X' ? 'O' : 'X'
    //This turn swap
    //console.log(this.turn)
  }

  restart(): void {
    //console.log("restart called");
    this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    console.log(this.cells);
  }
}
