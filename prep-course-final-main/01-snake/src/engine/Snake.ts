import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {

  head: Cell = new Cell(2, 0)
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)]
  direction: Direction = 'Right'
  setDirection(newDirection: Direction) {
    if (this.direction === 'Left' && newDirection === 'Right') return
    if (this.direction === 'Right' && newDirection === 'Left') return
    if (this.direction === 'Up' && newDirection === 'Down') return
    if (this.direction === 'Down' && newDirection === 'Up') return
    this.direction = newDirection
    //console.log(`Tail Length`, this.tail.length)

  }

  move() {
    // console.log(this.getHead());
    // console.log(this.getTail());
    const oldHead = this.getHead()
    if (this.direction === 'Right') {
      this.head = new Cell(oldHead.x + 1, oldHead.y)
    } else if (this.direction === 'Down') {
      this.head = new Cell(oldHead.x, oldHead.y + 1)
    } else if (this.direction === 'Left') {
      this.head = new Cell(oldHead.x - 1, oldHead.y)
    } else if (this.direction === 'Up') {
      this.head = new Cell(oldHead.x, oldHead.y - 1)

    }
    this.tail.shift()
    this.tail.push(new Cell(oldHead.x, oldHead.y))
  }

  grow() {
    const oldHead = this.getHead()
    this.tail.push(new Cell(oldHead.x, oldHead.y))
    //this.tail.push(new Cell(oldHead.x, oldHead.y),new Cell(oldHead.x, oldHead.y),new Cell(oldHead.x, oldHead.y))
  }

  getHead(): Cell {
    return this.head;
  }

  getDirection(): Direction {
    return this.direction;
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean {
    let result = false;
    this.tail.forEach(element => {
      if (cell.x === element.x && cell.y === element.y) {
        result = true;
      }
    });
    return false;
  }
}
