import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
})
    it("game draw X or O on index", () => {
      const game = new Game();
      game.onClick(0)
  
      expect(game.getCells()).toEqual([
        "X", "-", "-",
        "-", "-", "-",
        "-", "-", "-"
      ]);
      //expect(game.getTurn()).toBe("X");
      expect(game.getWinner()).toBe("-");
      expect(game.isTie()).toBe(false);
    
    
  });
  it("should be able to swap turn between x and 0", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(1)
    game.onClick(2)

    expect(game.getCells()).toEqual([
      "X", "O", "X",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  
  
});
it("should win if a row is filled by player", () => {
  const game = new Game();
  game.onClick(0)
  game.onClick(3)
  game.onClick(1)
  game.onClick(4)
  game.onClick(2)


  expect(game.getCells()).toEqual([
    "X", "X", "X",
    "O", "O", "-",
    "-", "-", "-"
  ]);
  expect(game.getWinner()).toBe("X");
  expect(game.isTie()).toBe(false);


});
});

// expect(game.getCells()).toEqual([
//   "0", "1", "2",
//   "3", "4", "5",
//   "6", "7", "8"