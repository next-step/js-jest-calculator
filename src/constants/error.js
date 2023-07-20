const OVERFLOW = Object.freeze({
  MAX_LENGTH: (maxLength) =>
    `${maxLength} 자리를 초과하는 수는 연산할 수 없습니다`,
});

export const ERROR = Object.freeze({ OVERFLOW });
