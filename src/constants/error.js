const OVERFLOW = Object.freeze({
  MAX_LENGTH: (maxLength) =>
    `${maxLength} 자리를 초과하는 수는 연산할 수 없습니다.`,
  ARGUMENTS: "피연산자는 2개까지 입력이 가능합니다.",
});

const INPUT = Object.freeze({
  EMPTY_STRING: "빈 공백은 입력할 수 없습니다.",
  DECIMAL: "소수는 입력할 수 없습니다.",
});

const TYPE = Object.freeze({
  INVALID: "숫자만 입력이 가능합니다.",
});

export const ERROR = Object.freeze({ OVERFLOW, INPUT, TYPE });
