import Calculator from "../src/Calculator";
import { get_valid_num_arr, get_invalid_num_arr } from "../src/utils/numbers";
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
const [pos_int, neg_int, pos_float, neg_float] = get_valid_num_arr();
// MAX_OPERAND_LENGTH을 넘는 유효하지 않은 길이의 [양의 정수, 음의 정수, 양의 실수, 음의 실수] 반환
const [long_pos_int, long_neg_int, long_pos_float, long_neg_float] =
  get_invalid_num_arr();

// feature 1: 사칙 연산 피연산자 유효성 검사
describe("피연산자가 유효한지 검사한다.", () => {
  const empty = "";
  const valid = 1;
  const string = "abc";

  it("피연산자가 빈 값이면, 오류 메시지를 반환한다.", () => {
    expect(() => calculator._validate_operands(empty, valid)).toThrow(
      ERROR_MESSAGE.EMPTY_OPERAND
    );
  });

  it("피연산자가 숫자나 문자열 형태의 숫자가 아니라면, 오류 메시지를 반환한다.", () => {
    expect(() => calculator._validate_operands(string, valid)).toThrow(
      ERROR_MESSAGE.INVALID_OPERAND
    );

    // 숫자로 변환 가능한 올바른 형태의 문자열이라면, 오류 메시지를 반환하지 않는다.
    expect(() =>
      calculator._validate_operands(String(pos_int), valid)
    ).not.toThrow();
    expect(() =>
      calculator._validate_operands(String(neg_int), valid)
    ).not.toThrow();
    expect(() =>
      calculator._validate_operands(String(pos_float), valid)
    ).not.toThrow();
    expect(() =>
      calculator._validate_operands(String(neg_float), valid)
    ).not.toThrow();
  });

  it("피연산자가 세 자리 초과라면, 오류 메시지를 반환한다.", () => {
    expect(() => calculator._validate_operands(long_pos_int, valid)).toThrow(
      ERROR_MESSAGE.LONG_OPERAND
    );
    expect(() => calculator._validate_operands(long_neg_int, valid)).toThrow(
      ERROR_MESSAGE.LONG_OPERAND
    );
    expect(() => calculator._validate_operands(long_pos_float, valid)).toThrow(
      ERROR_MESSAGE.LONG_OPERAND
    );
    expect(() => calculator._validate_operands(long_neg_float, valid)).toThrow(
      ERROR_MESSAGE.LONG_OPERAND
    );
  });

  it("그 외의 경우에는 올바른 피연산자로 판단한다.", () => {
    expect(() => calculator._validate_operands(valid, valid)).not.toThrow();
    expect(() => calculator._validate_operands(pos_int, valid)).not.toThrow();
    expect(() => calculator._validate_operands(neg_int, valid)).not.toThrow();
    expect(() => calculator._validate_operands(pos_float, valid)).not.toThrow();
    expect(() => calculator._validate_operands(neg_float, valid)).not.toThrow();
  });
});

// feature 2 : 사칙 연산 결과 반환
describe("피연산자 두 개와 연산자 하나의 연산 결과를 반환한다.", () => {
  it("두 개의 피연산자에 대해 덧셈 결과를 반환한다.", () => {
    expect(operate(OPERATORS.ADD, pos_int, neg_int)).toBe(pos_int + neg_int);
  });

  it("두 개의 피연산자에 대해 뺄셈 결과를 반환한다.", () => {
    expect(operate(OPERATORS.SUBTRACT, pos_int, neg_int)).toBe(
      pos_int - neg_int
    );
  });

  it("두 개의 피연산자에 대해 곱셈 결과를 반환한다.", () => {
    expect(operate(OPERATORS.MULTIPLY, pos_int, neg_int)).toBe(
      pos_int * neg_int
    );
  });

  it("두 개의 피연산자에 대해 나눗셈 결과를 반환한다.", () => {
    expect(operate(OPERATORS.DIVIDE, pos_int, neg_int)).toBe(pos_int / neg_int);
  });

  it("첫 번째 피연산자는 0이 아니고, 두 번쨰 피연산자가 +0/-0인 경우, 나눗셈 결과 (첫번째 피연산자 부호 * 두 번째 피연산자 부호) * Infinity를 반환한다.", () => {
    expect(operate(OPERATORS.DIVIDE, pos_int, POS_ZERO)).toBe(POS_INF);
    expect(operate(OPERATORS.DIVIDE, pos_int, NEG_ZERO)).toBe(NEG_INF);
    expect(operate(OPERATORS.DIVIDE, neg_int, POS_ZERO)).toBe(NEG_INF);
    expect(operate(OPERATORS.DIVIDE, neg_int, NEG_ZERO)).toBe(POS_INF);
  });

  it("두 피연산자가 모두 0일 때, 나눗셈 결과 NaN을 반환한다.", () => {
    expect(operate(OPERATORS.DIVIDE, POS_ZERO, POS_ZERO)).toBeNaN();
    expect(operate(OPERATORS.DIVIDE, POS_ZERO, NEG_ZERO)).toBeNaN();
    expect(operate(OPERATORS.DIVIDE, NEG_ZERO, POS_ZERO)).toBeNaN();
    expect(operate(OPERATORS.DIVIDE, NEG_ZERO, NEG_ZERO)).toBeNaN();
  });
});

// feature 3 : 사칙 연산 결과 유효성 검사
describe("유효하지 않은 연산 결과가 나오면, 오류 메시지를 반환한다.", () => {
  it("연산 결과 NaN인 경우, 오류 메시지를 반환한다.", () => {
    expect(() => calculator._validate_output(NaN)).toThrow(
      ERROR_MESSAGE.INVALID_RESULT
    );
  });

  it("연산 결과 -Infinity/Infinity인 경우, 오류 메시지를 반환한다.", () => {
    expect(() => calculator._validate_output(NEG_INF)).toThrow(
      ERROR_MESSAGE.INVALID_RESULT
    );
    expect(() => calculator._validate_output(POS_INF)).toThrow(
      ERROR_MESSAGE.INVALID_RESULT
    );
  });

  it("올바른 연산 결과라면, 오류를 반환하지 않는다.", () => {
    expect(() => calculator._validate_output(pos_int)).not.toThrow();
    expect(() => calculator._validate_output(neg_int)).not.toThrow();
    expect(() => calculator._validate_output(pos_float)).not.toThrow();
    expect(() => calculator._validate_output(neg_float)).not.toThrow();
  });
});

// feature 4 : 사칙 연산 결과를 조정하고 반환
describe("사칙연산 결과를 조정하여 반환한다.", () => {
  it("연산 결과가 -0인 경우, 0을 반환한다.", () => {
    expect(calculator._adjust_output(NEG_ZERO)).toBe(POS_ZERO);
  });

  it("그 외의 경우, 연산 결과의 소수점은 버림 처리하고 반환한다.", () => {
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
