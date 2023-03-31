const prompts = require("prompts");
let playerCash = 100;

//We have a board with slots
//Board size
//We have lines
//each line with same slots give us $

type SlotPosition = {
  x: number;
  y: number;
};

type Line = {
  positions: SlotPosition[];
};

const lines: Line[] = [
  //Diognales
  {
    positions: [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ],
  },
  {
    positions: [
      { x: 0, y: 2 },
      { x: 1, y: 1 },
      { x: 2, y: 0 },
    ],
  },
  //Rows
  {
    positions: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
    ],
  },
  {
    positions: [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
    ],
  },
  {
    positions: [
      { x: 2, y: 0 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
    ],
  },
  //Columns
  {
    positions: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
    ],
  },
  {
    positions: [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    ],
  },
  {
    positions: [
      { x: 0, y: 2 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
    ],
  },
];

type GameSymbol = {
  value: string;
  price: number;
};

const SYMBOLS: GameSymbol[] = [
  { value: " A", price: 5 },
  { value: " K", price: 4 },
  { value: " Q", price: 3 },
  { value: " J", price: 2 },
  { value: "10", price: 1 },
];

//3x3

let board: GameSymbol[][] = [];
const BOARD_ROWS: number = 3;
const BOARD_COLUMNS: number = 3;

(async () => {
  while (true) {
    const response = await prompts({
      type: "toggle",
      name: "value",
      message: "Can you spin?",
      initial: true,
      active: "yes",
      inactive: "no",
    });

    if (response.value === false) {
      break;
    }
    // Generate Random Board
    playerCash -= 1;
    for (let row = 0; row < BOARD_ROWS; row++) {
      board[row] = [];
      for (let index = 0; index < BOARD_COLUMNS; index++) {
        board[row].push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);
      }
    }
    //Create a function.
    board.forEach((row) => {
      const elements: string[] = [];
      row.forEach((symbol) => {
        elements.push(symbol.value);
      });
      console.log(elements.join(" - "));
    });
    lines.forEach((line) => {
      let lineValues: GameSymbol[] = [];

      line.positions.forEach((position) => {
        lineValues.push(board[position.x][position.y]);
      });
      //check if lineValues all are the same
      if (lineValues.every((value, i, values) => value === values[0])) {
        console.log(
          `We got a Line! Player Cash: ${playerCash} +${lineValues[0].price}$`
        );
        playerCash += lineValues[0].price;
      } else {
      }
    });
    console.log(`Player Cash: ${playerCash} $`);
  }
})();
