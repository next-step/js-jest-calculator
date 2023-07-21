import Calculator from "../src/Calculator";
import { POS_ZERO, NEG_ZERO, POS_INF, NEG_INF } from "../src/constants";

describe("피연산자 두 개와 연산자 하나의 연산 결과를 반환한다.", () => {
  const pos_operand = 1;
  const neg_operand = -31;

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
    expect(calculator.divide(pos_operand, POS_ZERO)).toBe(POS_INF);
    expect(calculator.divide(pos_operand, NEG_ZERO)).toBe(NEG_INF);
    expect(calculator.divide(neg_operand, POS_ZERO)).toBe(NEG_INF);
    expect(calculator.divide(neg_operand, NEG_ZERO)).toBe(POS_INF);
  });

  it("두 피연산자가 모두 0일 때, 나눗셈 결과 NaN을 반환한다.", () => {
    expect(calculator.divide(POS_ZERO, POS_ZERO)).toBeNaN();
    expect(calculator.divide(POS_ZERO, NEG_ZERO)).toBeNaN();
    expect(calculator.divide(NEG_ZERO, POS_ZERO)).toBeNaN();
    expect(calculator.divide(NEG_ZERO, NEG_ZERO)).toBeNaN();
  });
});
