import { Calculator } from "../src/Calculator";
import { ERROR_MSG } from "../src/constants";

const calculator = new Calculator();

beforeEach(() => {
    calculator.clearValue();
});

describe('✅ 입력 테스트', () => {
    describe('숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.', () => {
        test.each([
            {num1: 1000, num2: 3, operator: "+", errorMsg: ERROR_MSG.OPERAND_MAX_LENGTH},
            {num1: 23.5, num2: 8.4, operator: "+", errorMsg: ERROR_MSG.OPERAND_MAX_LENGTH},
        ])("$num1 $operator $num2 = ERROR", ({num1, num2, operator, errorMsg}) => {
            expect(() => {
                calculator.calculate(num1, num2, operator);
            }).toThrow(errorMsg);
        });
    });

    describe('피연산자는 숫자만 입력할 수 있다.', () => {
        test.each([
            {num1: 'TEST', num2: 3, operator: "+", errorMsg: ERROR_MSG.OPERAND_TYPE},
            {num1: "37", num2: 3, operator: "+", errorMsg: ERROR_MSG.OPERAND_TYPE},
            {num1: "", num2: 3, operator: "+", errorMsg: ERROR_MSG.OPERAND_TYPE},
            {num1: null, num2: 3, operator: "+", errorMsg: ERROR_MSG.OPERAND_TYPE},
        ])("$num1 $operator $num2 = ERROR", ({num1, num2, operator, errorMsg}) => {
            expect(() => {
                calculator.calculate(num1, num2, operator);
            }).toThrow(errorMsg);
        });
    });

    describe('연산자는 +, -, *, / 만 입력할 수 있다.', () => {
        test.each([
            {num1: 52, num2: 30, operator: "&", errorMsg: ERROR_MSG.OPERATOR_TYPE},
        ])("$num1 $operator $num2 = ERROR", ({num1, num2, operator, errorMsg}) => {
            expect(() => {
                calculator.calculate(num1, num2, operator);
            }).toThrow(errorMsg);
        });
    });

    describe('나눗셈에서 두번째 연산자는 0을 입력할 수 없다.', () => {
        test.each([
            {num1: 52, num2: 0, operator: "/", errorMsg: ERROR_MSG.SECOND_OPERAND_NOT_ZERO},
        ])("$num1 $operator $num2 = ERROR", ({num1, num2, operator, errorMsg}) => {
            expect(() => {
                calculator.calculate(num1, num2, operator);
            }).toThrow(errorMsg);
        });
    });
});

describe('✅ 연산 테스트', () => {
    describe('2개의 숫자에 대해 덧셈이 가능하다.', () => {
        test.each([
            {num1: 1, num2: 1, operator: "+", expected: 2},
            {num1: 71, num2: 22, operator: "+", expected: 93}
        ])("$num1 $operator $num2 = $expected", ({num1, num2, operator, expected}) => {
            calculator.calculate(num1, num2, operator);
            expect(calculator.getValue()).toBe(expected);
        });
    });

    describe('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
        test.each([
            {num1: 100, num2: 5, operator: "-", expected: 95},
            {num1: 1, num2: 3, operator: "-", expected: -2}
        ])("$num1 $operator $num2 = $expected", ({num1, num2, operator, expected}) => {
            calculator.calculate(num1, num2, operator);
            expect(calculator.getValue()).toBe(expected);
        });
    });

    describe('2개의 숫자에 대해 곱셈이 가능하다.', () => {
        test.each([
            {num1: 2, num2: 5, operator: "*", expected: 10},
            {num1: 12, num2: 3, operator: "*", expected: 36}
        ])("$num1 $operator $num2 = $expected", ({num1, num2, operator, expected}) => {
            calculator.calculate(num1, num2, operator);
            expect(calculator.getValue()).toBe(expected);
        });
    });

    describe('2개의 숫자에 대해 나눗셈이 가능하다.', () => {
        test.each([
            {num1: 6, num2: 3, operator: "/", expected: 2},
            {num1: 12, num2: 3, operator: "/", expected: 4}
        ])("$num1 $operator $num2 = $expected", ({num1, num2, operator, expected}) => {
            calculator.calculate(num1, num2, operator);
            expect(calculator.getValue()).toBe(expected);
        });
    });
});

describe('✅ 결과 출력 테스트', () => {
    describe('계산 결과를 표현할 때 소수점 이하는 버림한다.', () => {
        test.each([
            {num1: 1.1, num2: 2.5, operator: "+", expected: 3},
            {num1: 13, num2: 4, operator: "/", expected: 3}
        ])("$num1 $operator $num2 = $expected", ({num1, num2, operator, expected}) => {
            calculator.calculate(num1, num2, operator);
            expect(calculator.getValue()).toBe(expected);
        });
    });
});

