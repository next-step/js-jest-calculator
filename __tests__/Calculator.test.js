import Calculator from '../src/calculator.js';
import { OPERATIONS } from '../src/constants/operations.js';
import { ERROR_MESSAGE } from '../src/constants/message.js';

describe('덧셈 테스트', () => {
  test('1 + 1은 2이다.', () => {
    expect(Calculator.calculate(1, 1, OPERATIONS.PLUS)).toBe(2);
  });

  test('100 + 100은 200이다.', () => {
    expect(Calculator.calculate(100, 100, OPERATIONS.PLUS)).toBe(200);
  });

  test('60 + -20은 40이다.', () => {
    expect(Calculator.calculate(60, -20, OPERATIONS.PLUS)).toBe(40);
  });

  test('-60 + 20은 -40이다.', () => {
    expect(Calculator.calculate(-60, 20, OPERATIONS.PLUS)).toBe(-40);
  });

  test('-60 + -20은 -80이다.', () => {
    expect(Calculator.calculate(-60, -20, OPERATIONS.PLUS)).toBe(-80);
  });

  test('10.134 + 2.45는 12이다.', () => {
    expect(Calculator.calculate(10.134, 2.45, OPERATIONS.PLUS)).toBe(12);
  });

  test('-10.45 + -20.12은 -30이다.', () => {
    expect(Calculator.calculate(-10.45, -20.12, OPERATIONS.PLUS)).toBe(-30);
  });
});

describe('뺄셈 테스트', () => {
  test('2 - 1은 1이다.', () => {
    expect(Calculator.calculate(2, 1, OPERATIONS.MINUS)).toBe(1);
  });

  test('200 - 100은 100이다.', () => {
    expect(Calculator.calculate(200, 100, OPERATIONS.MINUS)).toBe(100);
  });

  test('60 - -20은 80이다.', () => {
    expect(Calculator.calculate(60, -20, OPERATIONS.MINUS)).toBe(80);
  });

  test('-60 - 20은 -80이다.', () => {
    expect(Calculator.calculate(-60, 20, OPERATIONS.MINUS)).toBe(-80);
  });

  test('-60 - -20은 -40이다.', () => {
    expect(Calculator.calculate(-60, -20, OPERATIONS.MINUS)).toBe(-40);
  });

  test('10.134 - 2.45는 7이다.', () => {
    expect(Calculator.calculate(10.134, 2.45, OPERATIONS.MINUS)).toBe(7);
  });

  test('-10.45 - -20.12은 9이다.', () => {
    expect(Calculator.calculate(-10.45, -20.12, OPERATIONS.MINUS)).toBe(9);
  });
});

// describe('곱셈 테스트', () => {
//   test('2 / 2은 4이다.', () => {
//     expect(Calculator.calculate(2, 1, OPERATIONS.TIMES)).toBe(4);
//   });

//   test('200 / 10은 2000이다.', () => {
//     expect(Calculator.calculate(100, 100, OPERATIONS.TIMES)).toBe(2000);
//   });

//   test('60 / -2은 -120이다.', () => {
//     expect(Calculator.calculate(60, -2, OPERATIONS.TIMES)).toBe(-120);
//   });

//   test('-60 / 2은 -120이다.', () => {
//     expect(Calculator.calculate(-60, 2, OPERATIONS.TIMES)).toBe(-120);
//   });

//   test('-60 / -2은 120이다.', () => {
//     expect(Calculator.calculate(-60, -20, OPERATIONS.TIMES)).toBe(120);
//   });

//   test('10.134 / 2.45는 24이다.', () => {
//     expect(Calculator.calculate(10.134, 2.45, OPERATIONS.TIMES)).toBe(24);
//   });

//   test('x 기호 테스트 (2 x 2 = 4)', () => {
//     expect(Calculator.calculate(2, 2, OPERATIONS.TIMES_CROSS)).toBe(4);
//   });

//   test('X 기호 테스트 (2 X 2 = 4)', () => {
//     expect(Calculator.calculate(2, 2, OPERATIONS.TIMES_CROSS.toUpperCase())).toBe(4);
//   });
// });

describe('유효성 검사 테스트', () => {
  test('피연산자를 입력하지 않은 경우 ("" + "")', () => {
    expect(() => {
      Calculator.calculate(undefined, undefined, OPERATIONS.PLUS);
    }).toThrowError(ERROR_MESSAGE.INVALID_FORMULA);
    expect(() => {
      Calculator.calculate('', '', OPERATIONS.PLUS);
    }).toThrowError(ERROR_MESSAGE.INVALID_FORMULA);
  });

  test('연산자를 입력하지 않은 경우 (300 "" 100)', () => {
    expect(() => {
      Calculator.calculate(300, 100, undefined);
    }).toThrowError(ERROR_MESSAGE.INVALID_FORMULA);
    expect(() => {
      Calculator.calculate(300, 100, '');
    }).toThrowError(ERROR_MESSAGE.INVALID_FORMULA);
  });

  test('둘다 입력하지 않은 경우 ("" "" "")', () => {
    expect(() => {
      Calculator.calculate(undefined, undefined, undefined);
    }).toThrowError(ERROR_MESSAGE.INVALID_FORMULA);
    expect(() => {
      Calculator.calculate('', '', '');
    }).toThrowError(ERROR_MESSAGE.INVALID_FORMULA);
  });

  test('입력값이 너무 큰 경우 (1000 + 1000)', () => {
    expect(() => {
      Calculator.calculate(1000, 1000, OPERATIONS.PLUS);
    }).toThrowError(ERROR_MESSAGE.OVER_MAX_DIGIT);
  });

  test('입력값이 세자릿수를 넘는 경우 (100 + 1000)', () => {
    expect(() => {
      Calculator.calculate(100, 1000, OPERATIONS.PLUS);
    }).toThrowError(ERROR_MESSAGE.OVER_MAX_DIGIT);
  });

  test('입력값이 세자릿수를 넘는 경우 (1000 + 100)', () => {
    expect(() => {
      Calculator.calculate(1000, 100, OPERATIONS.PLUS);
    }).toThrowError(ERROR_MESSAGE.OVER_MAX_DIGIT);
  });

  test('입력값이 음수로 세자릿수를 넘는 경우 (-1000 + -1000)', () => {
    expect(() => {
      Calculator.calculate(-1000, -1000, OPERATIONS.PLUS);
    }).toThrowError(ERROR_MESSAGE.OVER_MAX_DIGIT);
  });

  test('입력값이 음수로 세자릿수를 넘는 경우 (-100 + -1000)', () => {
    expect(() => {
      Calculator.calculate(-1000, -1000, OPERATIONS.PLUS);
    }).toThrowError(ERROR_MESSAGE.OVER_MAX_DIGIT);
  });

  test('입력값이 음수로 세자릿수를 넘는 경우 (-1000 + -100)', () => {
    expect(() => {
      Calculator.calculate(-1000, -100, OPERATIONS.PLUS);
    }).toThrowError(ERROR_MESSAGE.OVER_MAX_DIGIT);
  });

  test('올바르지 않은 연산자를 입력한 경우 (1 & 1)', () => {
    expect(() => {
      Calculator.calculate(1, 1, '🐞');
    }).toThrowError(ERROR_MESSAGE.INVALID_OPERATION);
  });

  test('올바르지 않은 피연산자를 입력한 경우 (버그 + 입니다)', () => {
    expect(() => Calculator.calculate('버그', '입니다', OPERATIONS.PLUS)).toThrowError(ERROR_MESSAGE.INVALID_OPERAND);
  });

  test('여러 에러 중첩시 미입력 => 피연산자 => 연산자 => 자릿수 순으로 출력', () => {
    expect(() => {
      Calculator.calculate('', 3000, '🐞');
    }).toThrowError(ERROR_MESSAGE.INVALID_FORMULA);
    expect(() => {
      Calculator.calculate('버그', '입니다', '🐞');
    }).toThrowError(ERROR_MESSAGE.INVALID_OPERAND);
    expect(() => {
      Calculator.calculate('저는 버그', 2000, OPERATIONS.PLUS);
    }).toThrowError(ERROR_MESSAGE.INVALID_OPERAND);
    expect(() => {
      Calculator.calculate('저는 버그', '입니다', OPERATIONS.PLUS);
    }).toThrowError(ERROR_MESSAGE.INVALID_OPERAND);
    expect(() => {
      Calculator.calculate('저는 버그', '입니다', OPERATIONS.PLUS);
    }).toThrowError(ERROR_MESSAGE.INVALID_OPERAND);
    expect(() => {
      Calculator.calculate(1000, 1000, '🐞');
    }).toThrowError(ERROR_MESSAGE.INVALID_OPERATION);
  });
});
