import { hasNumberOverLength } from './utils/number';

export const overThreeLength = (numbers) => {
  const numberLength = 3;
  if (hasNumberOverLength(numbers, numberLength)) {
    throw new Error(`숫자는 한 번에 ${numberLength}자리까지 입력 가능합니다.`);
  }
};
