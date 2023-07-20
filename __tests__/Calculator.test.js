import Calculator from '../src/Calculator';
import { CALCULATE_COMMAND } from '../src/constants/commands';
import { TEST_MESSAGE } from '../src/constants/message';
import {
  MESSAGE_TEST_SAMPLES,
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

const genMessageResults = (params, message) => {
  test.each(params)(message, ({ args, expected }) => {
    const calculate_table = [
      calculator.add(...args),
      calculator.subtract(...args),
      calculator.multiply(...args),
      calculator.divide(...args),
    ];
    calculate_table.forEach((received) => {
      expect(received).toBe(expected);
    });
  });
};

const confirmMessageTestResults = () => {
  MESSAGE_TEST_SAMPLES.forEach((params, i) => {
    genMessageResults(params, TEST_MESSAGE.MESSAGE_TEST[i]);
  });
};

describe('계산기 기능 요구사항 테스트', () => {
  arithmeticTestResults();
});

describe('계산기 메시지 확인 테스트', () => {
  confirmMessageTestResults();
});
