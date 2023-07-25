import Calculator from "../src/Calculator";
import { operate } from "../src/operations";
import { POS_ZERO, NEG_ZERO, POS_INF, NEG_INF } from "../src/constants/numbers";
import {
  DECIMAL_PLACE,
  OPERATORS,
  ERROR_MESSAGE,
} from "../src/constants/settings";

const calculator = new Calculator();

// feature 1: 사칙 연산 피연산자 유효성 검사
describe("피연산자가 유효한지 검사한다.", () => {
  const valid_operand = 1;
  const empty_operand = "";
  const string_operand = "abc";
  const int_pos_operand = 123;
  const int_neg_operand = -123;
  const float_pos_operand = 123.456;
  const float_neg_operand = -123.456;
  const long_int_pos_operand = 1234;
  const long_int_neg_operand = -1234;
  const long_float_pos_operand = 1234.456;
  const long_float_neg_operand = -1234.456;

  it("피연산자가 빈 값이면, 오류 메시지를 반환한다.", () => {
    expect(() =>
      calculator._validate_operands(empty_operand, valid_operand)
    ).toThrow(ERROR_MESSAGE.EMPTY_OPERAND);
  });

  it("피연산자가 숫자나 문자열 형태의 숫자가 아니라면, 오류 메시지를 반환한다.", () => {
    expect(() =>
      calculator._validate_operands(string_operand, valid_operand)
    ).toThrow(ERROR_MESSAGE.INVALID_OPERAND);

    // 숫자로 변환 가능한 올바른 형태의 문자열이라면, 오류 메시지를 반환하지 않는다.
    expect(() =>
      calculator._validate_operands(String(int_pos_operand), valid_operand)
    ).not.toThrow();
    expect(() =>
      calculator._validate_operands(String(int_neg_operand), valid_operand)
    ).not.toThrow();
    expect(() =>
      calculator._validate_operands(String(float_pos_operand), valid_operand)
    ).not.toThrow();
    expect(() =>
      calculator._validate_operands(String(float_neg_operand), valid_operand)
    ).not.toThrow();
  });

  it("피연산자가 세 자리 초과라면, 오류 메시지를 반환한다.", () => {
    expect(() =>
      calculator._validate_operands(long_int_pos_operand, valid_operand)
    ).toThrow(ERROR_MESSAGE.LONG_OPERAND);
    expect(() =>
      calculator._validate_operands(long_int_neg_operand, valid_operand)
    ).toThrow(ERROR_MESSAGE.LONG_OPERAND);
    expect(() =>
      calculator._validate_operands(long_float_pos_operand, valid_operand)
    ).toThrow(ERROR_MESSAGE.LONG_OPERAND);
    expect(() =>
      calculator._validate_operands(long_float_neg_operand, valid_operand)
    ).toThrow(ERROR_MESSAGE.LONG_OPERAND);
  });

  it("그 외의 경우에는 올바른 피연산자로 판단한다.", () => {
    expect(() =>
      calculator._validate_operands(valid_operand, valid_operand)
    ).not.toThrow();
    expect(() =>
      calculator._validate_operands(int_pos_operand, valid_operand)
    ).not.toThrow();
    expect(() =>
      calculator._validate_operands(int_neg_operand, valid_operand)
    ).not.toThrow();
    expect(() =>
      calculator._validate_operands(float_pos_operand, valid_operand)
    ).not.toThrow();
    expect(() =>
      calculator._validate_operands(float_neg_operand, valid_operand)
    ).not.toThrow();
  });
});

// feature 2 : 사칙 연산 결과 반환
describe("피연산자 두 개와 연산자 하나의 연산 결과를 반환한다.", () => {
  const pos_operand = 1;
  const neg_operand = -31;

  it("두 개의 피연산자에 대해 덧셈 결과를 반환한다.", () => {
    expect(operate(OPERATORS.ADD, pos_operand, neg_operand)).toBe(
      pos_operand + neg_operand
    );
  });

  it("두 개의 피연산자에 대해 뺄셈 결과를 반환한다.", () => {
    expect(operate(OPERATORS.SUBTRACT, pos_operand, neg_operand)).toBe(
      pos_operand - neg_operand
    );
  });

  it("두 개의 피연산자에 대해 곱셈 결과를 반환한다.", () => {
    expect(operate(OPERATORS.MULTIPLY, pos_operand, neg_operand)).toBe(
      pos_operand * neg_operand
    );
  });

  it("두 개의 피연산자에 대해 나눗셈 결과를 반환한다.", () => {
    expect(operate(OPERATORS.DIVIDE, pos_operand, neg_operand)).toBe(
      pos_operand / neg_operand
    );
  });

  it("첫 번째 피연산자는 0이 아니고, 두 번쨰 피연산자가 +0/-0인 경우, 나눗셈 결과 (첫번째 피연산자 부호 * 두 번째 피연산자 부호) * Infinity를 반환한다.", () => {
    expect(operate(OPERATORS.DIVIDE, pos_operand, POS_ZERO)).toBe(POS_INF);
    expect(operate(OPERATORS.DIVIDE, pos_operand, NEG_ZERO)).toBe(NEG_INF);
    expect(operate(OPERATORS.DIVIDE, neg_operand, POS_ZERO)).toBe(NEG_INF);
    expect(operate(OPERATORS.DIVIDE, neg_operand, NEG_ZERO)).toBe(POS_INF);
  });

  it("두 피연산자가 모두 0일 때, 나눗셈 결과 NaN을 반환한다.", () => {
    expect(operate(OPERATORS.DIVIDE, POS_ZERO, POS_ZERO)).toBeNaN();
    expect(operate(OPERATORS.DIVIDE, POS_ZERO, NEG_ZERO)).toBeNaN();
    expect(operate(OPERATORS.DIVIDE, NEG_ZERO, POS_ZERO)).toBeNaN();
    expect(operate(OPERATORS.DIVIDE, NEG_ZERO, NEG_ZERO)).toBeNaN();
  });
});

// feature 3 : 사칙 연산 결과 유효성 검사 및 변환
describe("유효하지 않은 연산 결과가 나오면, 오류 처리한다.", () => {
  it("연산 결과 NaN인 경우, 오류 메시지를 반환한다.", () => {
    expect(() => calculator._validate_ouput(NaN)).toThrow(
      ERROR_MESSAGE.INVALID_RESULT
    );
  });

  it("연산 결과 -Infinity/Infinity인 경우, 오류 메시지를 반환한다.", () => {
    expect(() => calculator._validate_ouput(NEG_INF)).toThrow(
      ERROR_MESSAGE.INVALID_RESULT
    );
    expect(() => calculator._validate_ouput(POS_INF)).toThrow(
      ERROR_MESSAGE.INVALID_RESULT
    );
  });
});

// feature 4 : 사칙 연산 결과를 조정하고 반환
describe("사칙연산 결과를 조정하여 반환한다.", () => {
  it("연산 결과가 -0인 경우, 0을 반환한다.", () => {
    expect(calculator._adjust_output(NEG_ZERO)).toBe(POS_ZERO);
  });

  it("그 외의 경우, 연산 결과의 소수점은 버림 처리하고 반환한다.", () => {
    const pos_int = 1970;
    const neg_int = -1970;
    const pos_float = 1995.1031;
    const neg_float = -1995.1031;

    expect(calculator._adjust_output(pos_int)).toBe(
      pos_int.toFixed(DECIMAL_PLACE)
    );
    expect(calculator._adjust_output(neg_int)).toBe(
      neg_int.toFixed(DECIMAL_PLACE)
    );

    expect(calculator._adjust_output(pos_float)).toBe(
      pos_float.toFixed(DECIMAL_PLACE)
    );
    expect(calculator._adjust_output(neg_float)).toBe(
      neg_float.toFixed(DECIMAL_PLACE)
    );
  });
});
