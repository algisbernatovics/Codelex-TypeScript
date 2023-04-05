import { GameField } from "./GameField";
import { Cell } from "./Cell";

describe("Game Field", () => {
  it("should have five apples present", () => {
    const field = new GameField();

    const apples = field.getApples();

    expect(apples.length).toBe(5);
  });
  it("should report if apple inside", () => {
    const field = new GameField();

    const apple = field.getApples()[0];

    expect(field.isAppleInside(apple)).toBe(true);
    expect(field.isAppleInside(new Cell(99, 99))).toBe(false);
  });
  it("should remove apple", () => {
    const field = new GameField();

    const apple = field.getApples()[1];
    field.removeApple(apple);

    expect(field.isAppleInside(apple)).toBe(false);
    expect(field.getApples().length).toBe(4);
  });
});
