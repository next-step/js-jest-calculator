import { OPERATORS, ERROR_MESSAGE } from "./constants/settings";

const operatorMapper = {
  [OPERATORS.ADD]: (a, b) => a + b,
  [OPERATORS.SUBTRACT]: (a, b) => a - b,
  [OPERATORS.MULTIPLY]: (a, b) => a * b,
  [OPERATORS.DIVIDE]: (a, b) => a / b,
};

export function operate(operator, operand1, operand2) {
  if (operatorMapper[operator] === undefined)
    throw new Error(ERROR_MESSAGE.INVALID_OPERATOR);

  return operatorMapper[operator](operand1, operand2);
}
