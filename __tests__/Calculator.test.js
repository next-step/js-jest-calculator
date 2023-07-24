import Calculator from "../src";

const calculator = new Calculator();

test("2개의 숫자에 대해 덧셈이 가능하다.", () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test("2개의 숫자에 대해 뺄셈이 가능하다.", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("2개의 숫자에 대해 곱셈이 가능하다.", () => {
  expect(calculator.multiply(2, 1)).toBe(2);
});

test("2개의 숫자에 대해 나눗셈이 가능하다.", () => {
  expect(calculator.divide(4, 2)).toBe(2);
  try {
    calculator.divide(2, 0);
    throw new Error("함수에서 에러가 발생하지 않았다.");
  } catch (e) {
    expect(e.message).toBe("b는 0이 될 수 없습니다.");
  }
});

test("숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.", () => {
  expect(calculator.divide(10, 5)).toBe(2);
  try {
    calculator.divide(1000, 5);
    throw new Error("함수에서 에러가 발생하지 않았다.");
  } catch (e) {
    expect(e.message).toBe("숫자는 최대 3자리까지만 작성 가능하다.");
  }
});

test("계산 결과를 표현할 때 소수점 이하는 버림한다.", () => {
  expect(calculator.divide(10, 3)).toBe(3);
});
