import { Cell } from "./Cell";
import { Snake } from "./Snake";


export class GameField {

  apples = [
    new Cell(18, 16),
    new Cell(20, 16),
    new Cell(22, 16),
    new Cell(25, 16),
    new Cell(27, 16)
  ];
  /**
   * Called when level completed
   */
  seed(): void {
    for (let i =0;i<5;i++){
      let randomX:number=Math.round(Math.random()*44)
      let randomY:number=Math.round(Math.random()*24)
      if (!this.apples.find(apple => apple.x === randomX && apple.y === randomY))
      {
      this.apples.push(new Cell(randomX, randomY));
    } 
    }
  }

  getApples(): Cell[] {
    return this.apples
  }
  //Apple is finded by snake.
  isAppleInside(cell: Cell): boolean {
    let findApple = false
    this.apples.find(function (apple) {
      if (apple.x === cell.x && apple.y === cell.y){
        findApple = true
      }})
    return findApple
  }
  //Remove apple after eating.
  removeApple(cell: Cell): void {
    const apple = this.apples.find(apple => apple.x === cell.x && apple.y === cell.y)!;
    const i = this.apples.indexOf(apple);
    this.apples.splice(i, 1);
  }
  //No apples in GameField.
  isEmpty(): boolean {
    if (this.apples.length === 0) return true
   else return false
  }
}
