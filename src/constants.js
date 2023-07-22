export const ERROR_MESSAGES = {
  EXCEED_MAXIMUM_INPUT_NUMBERS:
    "숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다.",
  PRESS_ONLY_NUMBER: "숫자를 입력해주세요.",
  PRESS_ONLY_OPERATOR: "연산자를 입력해주세요.",
  TYPE_IS_NOT_NUMBER: "연산받을 값의 타입이 숫자가 아닙니다.",
  CAN_NOT_DIVIDE_ZERO_IN_DENOMINATOR: "0으로 나눌 수 없습니다.",
};

export const OPERATORS = ["*", "/", "+", "%", "-"];

export const DIGITS = Array(10)
  .fill(0)
  .map((v, i) => v + i);
