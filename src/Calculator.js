import { POS_ZERO, NEG_ZERO, POS_INF, NEG_INF } from "./constants/numbers";
import {
  DECIMAL_PLACE,
  ERROR_MESSAGE,
  MAX_OPERAND_LENGTH,
} from "./constants/settings";
import { operate } from "./operations";

export default class Calculator {
  _get_digits(operand) {
    return parseInt(Math.abs(operand)).toString().length;
  }

  _validate_operands(operand1, operand2) {
    if (operand1 === "" || operand2 === "") {
      throw new Error(ERROR_MESSAGE.EMPTY_OPERAND);
    }

    if (isNaN(operand1) || isNaN(operand2)) {
      throw new Error(ERROR_MESSAGE.INVALID_OPERAND);
    }

    if (
      this._get_digits(operand1) > MAX_OPERAND_LENGTH ||
      this._get_digits(operand2) > MAX_OPERAND_LENGTH
    ) {
      throw new Error(ERROR_MESSAGE.LONG_OPERAND);
    }
  }

  _validate_output(output) {
    if (Number.isNaN(output) || output === POS_INF || output === NEG_INF) {
      throw new Error(ERROR_MESSAGE.INVALID_RESULT);
    }

    return;
  }

  _adjust_output(output) {
    if (Object.is(output, NEG_ZERO)) {
      return POS_ZERO;
    }

    return output.toFixed(DECIMAL_PLACE);
  }

  _display(output) {
    console.log(output);
  }

  calculate(operand1, operand2, operator) {
    try {
      let result = 0;

      this._validate_operands(operand1, operand2);

      operate(operator, operand1, operand2);

      this._validate_output(result);

      this._display(this._adjust_output(result));
    } catch (error) {
      this._display(error.message);
    }
  }
}
