import { hasNumberOverGivenDigit } from './utils/number';

export const overThreeDigits = (numbers) => {
  if (hasNumberOverGivenDigit(numbers, 3)) {
    throw new Error('숫자는 한 번에 3자리까지 입력 가능합니다.');
  }
};
