import Calculator from "../src";

describe("피연산자 두 개와 연산자 하나의 연산 결과를 반환한다.", () => {
  const operand1 = -1;
  const operand2 = 30;

  const pos_zero = +0;
  const neg_zero = -0;

  const calculator = new Calculator();

  it("두 개의 피연산자에 대해 덧셈 결과를 반환한다.", () => {
    expect(calculator.add(operand1, operand2)).toBe(operand1 + operand2);
  });

  it("두 개의 피연산자에 대해 뺄셈 결과를 반환한다.", () => {
    expect(calculator.subtarct(operand1, operand2)).toBe(operand1 - operand2);
  });

  it("두 개의 피연산자에 대해 곱셈 결과를 반환한다.", () => {
    expect(calculator.multiply(operand1, operand2)).toBe(operand1 * operand2);
  });

  it("두 개의 피연산자에 대해 나눗셈 결과를 반환한다.", () => {
    expect(calculator.divide(operand1, operand2)).toBe(operand1 / operand2);
  });

  it("첫 번째 피연산자는 0이 아니고, 두 번쨰 피연산자가 +0/-0인 경우, 나눗셈 결과 Infinity/-Infinity를 반환한다.", () => {
    expect(calculator.divide(operand1, pos_zero)).toBe(Infinity);
    expect(calculator.divide(operand1, neg_zero)).toBe(-Infinity);
  });

  it("두 피연산자가 모두 0일 때, 나눗셈 결과 NaN을 반환한다.", () => {
    expect(calculator.divide(pos_zero, pos_zero)).toBeNaN();
    expect(calculator.divide(pos_zero, neg_zero)).toBeNaN();
    expect(calculator.divide(neg_zero, pos_zero)).toBeNaN();
    expect(calculator.divide(neg_zero, neg_zero)).toBeNaN();
  });
});
