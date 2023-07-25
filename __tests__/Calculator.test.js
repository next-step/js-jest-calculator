import Calculator from "../src/Calculator";
import { getValidNums, getInvalidNums } from "../src/utils/numbers";
import { operate } from "../src/operations";
import { POS_ZERO, NEG_ZERO, POS_INF, NEG_INF } from "../src/constants/numbers";
import {
  DECIMAL_PLACE,
  OPERATORS,
  ERROR_MESSAGE,
} from "../src/constants/settings";

const calculator = new Calculator();
// 테스팅에 사용되는 일부 상수는 constants/settings 파일에 따라 자동 변경됨

// MAX_OPERAND_LENGTH를 넘지 않는 유효한 길이의 [양의 정수, 음의 정수, 양의 실수, 음의 실수] 반환
const [POS_INT, NEG_INT, POS_FLT, NEG_FLT] = getValidNums();
// MAX_OPERAND_LENGTH을 넘는 유효하지 않은 길이의 [양의 정수, 음의 정수, 양의 실수, 음의 실수] 반환
const [LONG_POS_INT, LONG_NEG_INT, LONG_POS_FLT, LONG_NEG_FLT] =
  getInvalidNums();

// feature 1: 사칙 연산 피연산자 유효성 검사
describe("피연산자가 유효한지 검사한다.", () => {
  const EMPTY = "";
  const VALID = 1;
  const STR = "abc";

  it("피연산자가 빈 값이면, 오류를 생성한다.", () => {
    expect(() => calculator._validateOperands(EMPTY, VALID)).toThrow(
      ERROR_MESSAGE.EMPTY_OPERAND
    );
  });

  it("피연산자가 숫자나 문자열 형태의 숫자가 아니라면, 오류를 생성한다.", () => {
    expect(() => calculator._validateOperands(STR, VALID)).toThrow(
      ERROR_MESSAGE.INVALID_OPERAND
    );

    // 숫자로 변환 가능한 올바른 형태의 문자열이라면, 오류를 반환하지 않는다.
    expect(() =>
      calculator._validateOperands(String(POS_INT), VALID)
    ).not.toThrow();
    expect(() =>
      calculator._validateOperands(String(NEG_INT), VALID)
    ).not.toThrow();
    expect(() =>
      calculator._validateOperands(String(POS_FLT), VALID)
    ).not.toThrow();
    expect(() =>
      calculator._validateOperands(String(NEG_FLT), VALID)
    ).not.toThrow();
  });

  it("피연산자가 세 자리 초과라면, 오류를 생성한다.", () => {
    expect(() => calculator._validateOperands(LONG_POS_INT, VALID)).toThrow(
      ERROR_MESSAGE.LONG_OPERAND
    );
    expect(() => calculator._validateOperands(LONG_NEG_INT, VALID)).toThrow(
      ERROR_MESSAGE.LONG_OPERAND
    );
    expect(() => calculator._validateOperands(LONG_POS_FLT, VALID)).toThrow(
      ERROR_MESSAGE.LONG_OPERAND
    );
    expect(() => calculator._validateOperands(LONG_NEG_FLT, VALID)).toThrow(
      ERROR_MESSAGE.LONG_OPERAND
    );
  });

  it("그 외의 경우에는 올바른 피연산자로 판단한다.", () => {
    expect(() => calculator._validateOperands(VALID, VALID)).not.toThrow();
    expect(() => calculator._validateOperands(POS_INT, VALID)).not.toThrow();
    expect(() => calculator._validateOperands(NEG_INT, VALID)).not.toThrow();
    expect(() => calculator._validateOperands(POS_FLT, VALID)).not.toThrow();
    expect(() => calculator._validateOperands(NEG_FLT, VALID)).not.toThrow();
  });
});

// feature 2 : 사칙 연산 결과 반환
describe("피연산자 두 개와 연산자 하나의 연산 결과를 반환한다.", () => {
  it("두 개의 피연산자에 대해 덧셈 결과를 반환한다.", () => {
    expect(operate(OPERATORS.ADD, POS_INT, NEG_INT)).toBe(POS_INT + NEG_INT);
  });

  it("두 개의 피연산자에 대해 뺄셈 결과를 반환한다.", () => {
    expect(operate(OPERATORS.SUBTRACT, POS_INT, NEG_INT)).toBe(
      POS_INT - NEG_INT
    );
  });

  it("두 개의 피연산자에 대해 곱셈 결과를 반환한다.", () => {
    expect(operate(OPERATORS.MULTIPLY, POS_INT, NEG_INT)).toBe(
      POS_INT * NEG_INT
    );
  });

  it("두 개의 피연산자에 대해 나눗셈 결과를 반환한다.", () => {
    expect(operate(OPERATORS.DIVIDE, POS_INT, NEG_INT)).toBe(POS_INT / NEG_INT);
  });

  it("첫 번째 피연산자는 0이 아니고, 두 번쨰 피연산자가 +0/-0인 경우, 나눗셈 결과 (첫번째 피연산자 부호 * 두 번째 피연산자 부호) * Infinity를 반환한다.", () => {
    expect(operate(OPERATORS.DIVIDE, POS_INT, POS_ZERO)).toBe(POS_INF);
    expect(operate(OPERATORS.DIVIDE, POS_INT, NEG_ZERO)).toBe(NEG_INF);
    expect(operate(OPERATORS.DIVIDE, NEG_INT, POS_ZERO)).toBe(NEG_INF);
    expect(operate(OPERATORS.DIVIDE, NEG_INT, NEG_ZERO)).toBe(POS_INF);
  });

  it("두 피연산자가 모두 0일 때, 나눗셈 결과 NaN을 반환한다.", () => {
    expect(operate(OPERATORS.DIVIDE, POS_ZERO, POS_ZERO)).toBeNaN();
    expect(operate(OPERATORS.DIVIDE, POS_ZERO, NEG_ZERO)).toBeNaN();
    expect(operate(OPERATORS.DIVIDE, NEG_ZERO, POS_ZERO)).toBeNaN();
    expect(operate(OPERATORS.DIVIDE, NEG_ZERO, NEG_ZERO)).toBeNaN();
  });
});

// feature 3 : 사칙 연산 결과 유효성 검사
describe("유효하지 않은 연산 결과가 나오면, 오류를 생성한다.", () => {
  it("연산 결과 NaN인 경우, 오류를 생성한다.", () => {
    expect(() => calculator._validateOutput(NaN)).toThrow(
      ERROR_MESSAGE.INVALID_RESULT
    );
  });

  it("연산 결과 -Infinity/Infinity인 경우, 오류를 생성한다.", () => {
    expect(() => calculator._validateOutput(NEG_INF)).toThrow(
      ERROR_MESSAGE.INVALID_RESULT
    );
    expect(() => calculator._validateOutput(POS_INF)).toThrow(
      ERROR_MESSAGE.INVALID_RESULT
    );
  });

  it("올바른 연산 결과라면, 오류를 반환하지 않는다.", () => {
    expect(() => calculator._validateOutput(POS_INT)).not.toThrow();
    expect(() => calculator._validateOutput(NEG_INT)).not.toThrow();
    expect(() => calculator._validateOutput(POS_FLT)).not.toThrow();
    expect(() => calculator._validateOutput(NEG_FLT)).not.toThrow();
  });
});

// feature 4 : 사칙 연산 결과를 조정하고 반환
describe("사칙연산 결과를 조정하여 반환한다.", () => {
  it("연산 결과가 -0인 경우, 0을 반환한다.", () => {
    expect(calculator._adjustOutput(NEG_ZERO)).toBe(POS_ZERO);
  });

  it("그 외의 경우, 연산 결과의 소수점은 버림 처리하고 반환한다.", () => {
    expect(calculator._adjustOutput(POS_INT)).toBe(
      POS_INT.toFixed(DECIMAL_PLACE)
    );
    expect(calculator._adjustOutput(NEG_INT)).toBe(
      NEG_INT.toFixed(DECIMAL_PLACE)
    );

    expect(calculator._adjustOutput(POS_FLT)).toBe(
      POS_FLT.toFixed(DECIMAL_PLACE)
    );
    expect(calculator._adjustOutput(NEG_FLT)).toBe(
      NEG_FLT.toFixed(DECIMAL_PLACE)
    );
  });
});
