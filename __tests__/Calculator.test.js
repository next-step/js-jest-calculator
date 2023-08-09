import { Calculator } from "../src";
import { ERROR_MSG } from "../src/constants";

const calculator = new Calculator();

beforeEach(() => {
    calculator.clearValue();
});

describe('2개의 숫자에 대해 덧셈이 가능하다.', () => {
    test('1 + 1 = 2', () => {
        calculator.calculate(1, 1, "+");
        expect(calculator.getValue()).toBe(2);
    });
});

describe('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
    test('100 - 5 = 95', () => {
        calculator.calculate(100, 5, "-");
        expect(calculator.getValue()).toBe(95);
    });
    test('1 - 3 = -2', () => {
        calculator.calculate(1, 3, "-");
        expect(calculator.getValue()).toBe(-2);
    });
});

describe('2개의 숫자에 대해 곱셈이 가능하다.', () => {
    test('2 * 3 = 6', () => {
        calculator.calculate(2, 3, "*");
        expect(calculator.getValue()).toBe(6);
    });
});

describe('2개의 숫자에 대해 나눗셈이 가능하다.', () => {
    test('6 / 3 = 2', () => {
        calculator.calculate(6, 3, "/");
        expect(calculator.getValue()).toBe(2);
    });
});

describe('숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.', () => {
    test('1000 + 3 = ERROR', () => {
        expect(() => {
            calculator.calculate(1000, 3, "+");
        }).toThrow(ERROR_MSG.OPERAND_MAX_LENGTH);
    });
    test('23.5 + 8.4 = ERROR', () => {
        expect(() => {
            calculator.calculate(23.5, 8.4, "+");
        }).toThrow(ERROR_MSG.OPERAND_MAX_LENGTH);
    });
});

describe('계산 결과를 표현할 때 소수점 이하는 버림한다.', () => {
    test('1.1 + 2.5 = 3', () => {
        calculator.calculate(1.1, 2.5, "+");
        expect(calculator.getValue()).toBe(3);
    });
    test('13 / 4 = 3', () => {
        calculator.calculate(13, 4, "/");
        expect(calculator.getValue()).toBe(3);
    });
});

describe('피연산자는 숫자만 입력할 수 있다.', () => {
    test('TEST + 3 = ERROR', () => {
        expect(() => {
            calculator.calculate('TEST', 3, "+");
        }).toThrow(ERROR_MSG.OPERAND_TYPE);
    });
    test('TEST + 3 = ERROR', () => {
        expect(() => {
            calculator.calculate([], 3, "+");
        }).toThrow(ERROR_MSG.OPERAND_TYPE);
    });
});

describe('연산자는 +, -, *, / 만 입력할 수 있다.', () => {
    test('52 & 30 = ERROR', () => {
        expect(() => {
            calculator.calculate(52, 30, "&");
        }).toThrow(ERROR_MSG.OPERATOR_TYPE);
    });
});

describe('나눗셈에서 두번째 연산자는 0을 입력할 수 없다.', () => {
    test('52 / 0 = ERROR', () => {
        expect(() => {
            calculator.calculate(52, 0, "/");
        }).toThrow(ERROR_MSG.SECOND_OPERAND_NOT_ZERO);
    });
});
