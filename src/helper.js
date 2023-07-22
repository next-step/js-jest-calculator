import { ERROR_MESSAGE } from "./constants/errorMessage";

/**
 * 계산 결과를 표현할 때 소수점 이하는 버림한다.
 * @param (사칙연산)  - number
 * @returns number without 소수점
 */
export const removeDecimalPoint = n => {
  return Math.trunc(n);
};

/**
 * 숫자는 한번에 최대 3자리 수까지만 다룰 수 있다. Boolean
 * @param (사칙연산)  - number
 * @returns boolean
 */
export const acceptThreeDigit = n => {
  if (String(Math.abs(n)).length < 4) return true;
};
