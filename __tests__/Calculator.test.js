import Calculator from "../src/Calculator";
import { POS_ZERO, NEG_ZERO, POS_INF, NEG_INF } from "../src/constants/numbers";
import { DECIMAL_PLACE, ERROR_MESSAGE } from "../src/constants/settings";

const calculator = new Calculator();

// feature 1: 사칙 연산 피연산자 유효성 검사
describe("피연산자가 유효한지 검사한다.", () => {
  const MAX_OPERAND_LENGTH = 3;

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
    expect(() => calculator.validate(empty_operand, valid_operand)).toThrow(
      ERROR_MESSAGE.EMPTY_OPERAND
    );
  });

  it("피연산자가 숫자나 문자열 형태의 숫자가 아니라면, 오류 메시지를 반환한다.", () => {
    expect(() => calculator.validate(string_operand, valid_operand)).toThrow(
      ERROR_MESSAGE.INVALID_OPERAND
    );

    // 숫자로 변환 가능한 올바른 형태의 문자열이라면, 오류 메시지를 반환하지 않는다.
    expect(() =>
      calculator.validate(String(int_pos_operand), valid_operand)
    ).not.toThrow();
    expect(() =>
      calculator.validate(String(int_neg_operand), valid_operand)
    ).not.toThrow();
    expect(() =>
      calculator.validate(String(float_pos_operand), valid_operand)
    ).not.toThrow();
    expect(() =>
      calculator.validate(String(float_neg_operand), valid_operand)
    ).not.toThrow();
  });

  it("피연산자가 세 자리 초과라면, 오류 메시지를 반환한다.", () => {
    expect(() =>
      calculator.validate(long_int_pos_operand, valid_operand)
    ).toThrow(ERROR_MESSAGE.LONG_OPERAND);
    expect(() =>
      calculator.validate(long_int_neg_operand, valid_operand)
    ).toThrow(ERROR_MESSAGE.LONG_OPERAND);
    expect(() =>
      calculator.validate(long_float_pos_operand, valid_operand)
    ).toThrow(ERROR_MESSAGE.LONG_OPERAND);
    expect(() =>
      calculator.validate(long_float_neg_operand, valid_operand)
    ).toThrow(ERROR_MESSAGE.LONG_OPERAND);
  });

  it("그 외의 경우에는 올바른 피연산자로 판단한다.", () => {
    expect(() =>
      calculator.validate(valid_operand, valid_operand)
    ).not.toThrow();
    expect(() =>
      calculator.validate(int_pos_operand, valid_operand)
    ).not.toThrow();
    expect(() =>
      calculator.validate(int_neg_operand, valid_operand)
    ).not.toThrow();
    expect(() =>
      calculator.validate(float_pos_operand, valid_operand)
    ).not.toThrow();
    expect(() =>
      calculator.validate(float_neg_operand, valid_operand)
    ).not.toThrow();
  });
});

// feature 2 : 사칙 연산 결과 반환
// 단, 이 떄 유효한 피연산자만 들어온다고 가정함
describe("피연산자 두 개와 연산자 하나의 연산 결과를 반환한다.", () => {
  const pos_operand = 1;
  const neg_operand = -31;

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

// feature 3 : 사칙 연산 결과 디스플레이
describe("화면에 출력할 연산 결과를 반환한다.", () => {
  it("연산 결과 NaN인 경우, 오류 메시지를 반환한다.", () => {
    expect(() => calculator.display(NaN)).toThrow(ERROR_MESSAGE.INVALID_RESULT);
  });

  it("연산 결과 -Infinity/Infinity인 경우, 오류 메시지를 반환한다.", () => {
    expect(() => calculator.display(NEG_INF)).toThrow(
      ERROR_MESSAGE.INVALID_RESULT
    );
    expect(() => calculator.display(POS_INF)).toThrow(
      ERROR_MESSAGE.INVALID_RESULT
    );
  });

  it("연산 결과가 -0인 경우, 0을 반환한다.", () => {
    expect(calculator.display(NEG_ZERO)).toBe(POS_ZERO);
  });

  it("그 외의 경우, 연산 결과의 소수점은 버림 처리하고 반환한다.", () => {
    const pos_int = 1970;
    const neg_int = -1970;
    const pos_float = 1995.1031;
    const neg_float = -1995.1031;

    expect(calculator.display(pos_int)).toBe(pos_int.toFixed(DECIMAL_PLACE));
    expect(calculator.display(neg_int)).toBe(neg_int.toFixed(DECIMAL_PLACE));

    expect(calculator.display(pos_float)).toBe(
      pos_float.toFixed(DECIMAL_PLACE)
    );
    expect(calculator.display(neg_float)).toBe(
      neg_float.toFixed(DECIMAL_PLACE)
    );
  });
});
