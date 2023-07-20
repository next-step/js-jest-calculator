import Calculator from '../src/Calculator';
import { CALCULATE_COMMAND } from '../src/constants/commands';
import { TEST_MESSAGE } from '../src/constants/message';
import {
  EXCEPTION_TEST_SAMPLES,
  TEST_FUCNTION_SAMPLES,
} from '../src/constants/testSample';

const calculator = new Calculator();

const genArithmeticExpectResults = (params, message, type) => {
  test.each(params)(message, ({ a, b, expected }) => {
    const calculate_table = {
      ADD: calculator.add(a, b),
      SUBTRACT: calculator.subtract(a, b),
      MULTIPLY: calculator.multiply(a, b),
      DIVIDE: calculator.divide(a, b),
    };
    expect(calculate_table[type]).toBe(expected);
  });
};

const arithmeticTestResults = () => {
  const commands = Object.values(CALCULATE_COMMAND);
  TEST_FUCNTION_SAMPLES.forEach((params, i) => {
    genArithmeticExpectResults(
      params,
      TEST_MESSAGE.FUNCTIONAL_TEST[commands[i]],
      CALCULATE_COMMAND[commands[i]]
    );
  });
};

const genExceptionResults = (params, message) => {
  test.each(params)(message, ({ args, expected }) => {
    const calculateFnArr = [
      () => calculator.add(...args),
      () => calculator.subtract(...args),
      () => calculator.multiply(...args),
      () => calculator.divide(...args),
    ];
    calculateFnArr.forEach((fn) => {
      expect(fn).toThrow(expected);
    });
  });
};

const confirmExceptionTestResults = () => {
  EXCEPTION_TEST_SAMPLES.forEach((params, i) => {
    genExceptionResults(params, TEST_MESSAGE.EXCEPTION_TEST[i]);
  });
};

describe('계산기 기능 요구사항 테스트', () => {
  arithmeticTestResults();
});

describe('계산기 예외 확인 테스트', () => {
  confirmExceptionTestResults();
});
