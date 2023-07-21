import { MAX_VALUE } from './calculatorRule.js';

export const ERROR_MESSAGE = Object.freeze({
  OVER_MAX_DIGIT: `최대 ${MAX_VALUE.toString().length}자릿수까지 입력 가능합니다.`,
  INVALID_OPERATION: '올바르지 않은 연산자입니다!',
  INVALID_OPERAND: '올바르지 않은 피연산자입니다!',
  INVALID_FORMULA: '올바른 수식을 입력해주세요!',
});
