const ERROR_MESSAGE = Object.freeze({
  ARG_ERROR: '인자를 2개만 입력해주세요.',
  DIGIT_ERROR: '최대 3자리 수 까지만 가능해요.',
});

export const TEST_MESSAGE = Object.freeze({
  FUNCTIONAL_TEST: Object.freeze({
    ADD: '2개의 숫자에 대해 덧셈이 가능하다.',
    SUBTRACT: '2개의 숫자에 대해 뺄셈이 가능하다.',
    MULTIPLY: '2개의 숫자에 대해 곱셈이 가능하다.',
    DIVIDE: '2개의 숫자에 대해 나눗셈이 가능하다.',
  }),
  MESSAGE_TEST: [
    '숫자는 한번에 최대 4자리 수 이상이 되면 예외처리가 되어야 한다.',
    '2개의 숫자를 계산하지 않는 경우 예외 처리가 되어야 한다.',
  ],
});

export default ERROR_MESSAGE;
