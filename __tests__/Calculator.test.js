const { add, subtract, multiply, divide } = require("../src/index");

describe('add', () => {
  test('adds', () => {
    expect(add(1, 2)).toBe(3);
  });
    test("subtract", () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test("multiplies", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("divides", () => {
    expect(divide(10, 2)).toBe(5);
  });
});



