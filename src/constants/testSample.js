import ERROR_MESSAGE from './message';

export const TEST_FUCNTION_SAMPLES = [
  [
    { a: 4, b: 1, expected: 5 },
    { a: 20, b: 9, expected: 29 },
    { a: 230, b: 120, expected: 350 },
  ],
  [
    { a: 4, b: 1, expected: 3 },
    { a: 20, b: 9, expected: 11 },
    { a: 230, b: 120, expected: 110 },
  ],
  [
    { a: 4, b: 1, expected: 4 },
    { a: 20, b: 9, expected: 180 },
    { a: 230, b: 120, expected: 27600 },
  ],
  [
    { a: 4, b: 1, expected: 4 },
    { a: 20, b: 9, expected: 2 },
    { a: 230, b: 120, expected: 1 },
    { a: -10, b: 3, expected: -3 },
  ],
];

export const MESSAGE_TEST_SAMPLES = [
  [
    { args: [1, 2, 3], expected: ERROR_MESSAGE.ARG_ERROR },
    { args: [1], expected: ERROR_MESSAGE.ARG_ERROR },
    { args: [2, 3, 4, 2], expected: ERROR_MESSAGE.ARG_ERROR },
  ],
  [
    { args: [1231, 123], expected: ERROR_MESSAGE.DIGIT_ERROR },
    { args: [12, 2132], expected: ERROR_MESSAGE.DIGIT_ERROR },
    { args: [13213, 124141], expected: ERROR_MESSAGE.DIGIT_ERROR },
  ],
];
