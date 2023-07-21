const { add, subtract, multiply, divide } = require("../src/index");

describe('add', () => {
  test('adds case1', () => {
    expect(add(1, 2)).toBe(3);
  });
  test('adds case2', () => {
    expect(add(-5, -3)).toBe(-8);
  });
});
describe('subtract', () => {
  test("subtract case1", () => {
    expect(subtract(5, 2)).toBe(3);
  });
  test('subtract case2', () => {
    expect(subtract(-5, -2)).toBe(-3);
  });
})
describe('multiplies', () => {
  test("multiplies case1", () => {
    expect(subtract(5, 2)).toBe(3);
  });
  test('multiplies case2', () => {
    expect(multiply(5, 0)).toBe(0);
  });
})
describe('divides case1', () => {
  test("divides", () => {
    expect(subtract(5, 2)).toBe(3);
  });
  test("divides case1", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divides case2", () => {
    expect(divide(10, 1)).toBe(10);
  });
  test("divides case3 by 0", () => {
    expect(() => {
      divide(10, 0);
    }).toThrow(Error("Cannot divide by 0."));
  });
})

