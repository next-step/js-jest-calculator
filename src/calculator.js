import { add, divide, multiply, subtract } from './utils/calculation.js';
import { floor } from './utils/transformer.js';
import { validateCalculator } from './utils/validateCalculator.js';

const calculateWithValidation = (calculate, transformer = (number) => number) => {
  return (firstNumber, secondNumber) => {
    try {
      const { message, success } = validateCalculator(firstNumber, secondNumber);
      if (success) {
        return transformer(calculate(firstNumber, secondNumber));
      }
      throw message;
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const calculator = {
  add: calculateWithValidation(add),
  subtract: calculateWithValidation(subtract),
  multiply: calculateWithValidation(multiply),
  divide: calculateWithValidation(divide, floor)
};
