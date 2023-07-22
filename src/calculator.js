import { add, divide, multiply, subtract } from './utils/calculation.js';
import { floor } from './utils/transformer.js';
import { validateCalculator } from './utils/validateCalculator.js';

const calculateWithValidation = (operator, transformer = Number) => {
  return (...operands) => {
    try {
      if (validateCalculator(operator, ...operands)) {
        return transformer(operator(...operands));
      }
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
