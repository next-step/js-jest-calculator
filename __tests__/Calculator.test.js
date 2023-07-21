import Calculator from "../src";

describe("피연산자 두 개와 연산자 하나의 연산 결과를 반환한다.", () => {
  const pos_operand = 1;
  const neg_operand = -31;

  const pos_zero = +0;
  const neg_zero = -0;

  const calculator = new Calculator();

  it("두 개의 피연산자에 대해 덧셈 결과를 반환한다.", () => {
    expect(calculator.add(pos_operand, neg_operand)).toBe(
      pos_operand + neg_operand
    );
  });

  it("두 개의 피연산자에 대해 뺄셈 결과를 반환한다.", () => {
    expect(calculator.subtarct(pos_operand, neg_operand)).toBe(
      pos_operand - neg_operand
    );
  });

  it("두 개의 피연산자에 대해 곱셈 결과를 반환한다.", () => {
    expect(calculator.multiply(pos_operand, neg_operand)).toBe(
      pos_operand * neg_operand
    );
  });

  it("두 개의 피연산자에 대해 나눗셈 결과를 반환한다.", () => {
    expect(calculator.divide(pos_operand, neg_operand)).toBe(
      pos_operand / neg_operand
    );
  });

  it("첫 번째 피연산자는 0이 아니고, 두 번쨰 피연산자가 +0/-0인 경우, 나눗셈 결과 (첫번째 피연산자 부호 * 두 번째 피연산자 부호) * Infinity를 반환한다.", () => {
    expect(calculator.divide(pos_operand, pos_zero)).toBe(Infinity);
    expect(calculator.divide(pos_operand, neg_zero)).toBe(-Infinity);
    expect(calculator.divide(neg_operand, pos_zero)).toBe(-Infinity);
    expect(calculator.divide(neg_operand, neg_zero)).toBe(Infinity);
  });

  it("두 피연산자가 모두 0일 때, 나눗셈 결과 NaN을 반환한다.", () => {
    expect(calculator.divide(pos_zero, pos_zero)).toBeNaN();
    expect(calculator.divide(pos_zero, neg_zero)).toBeNaN();
    expect(calculator.divide(neg_zero, pos_zero)).toBeNaN();
    expect(calculator.divide(neg_zero, neg_zero)).toBeNaN();
  });
});
