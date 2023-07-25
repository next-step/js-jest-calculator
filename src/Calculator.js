import { POS_ZERO, NEG_ZERO, POS_INF, NEG_INF } from "./constants/numbers";
import { DECIMAL_PLACE, ERROR_MESSAGE } from "./constants/settings";

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
      this._get_digits(operand1) > DECIMAL_PLACE ||
      this._get_digits(operand2) > DECIMAL_PLACE
    ) {
      throw new Error(ERROR_MESSAGE.LONG_OPERAND);
    }
  }

  _add(operand1, operand2) {
    return operand1 + operand2;
  }

  _subtract(operand1, operand2) {
    return operand1 - operand2;
  }

  _multiply(operand1, operand2) {
    return operand1 * operand2;
  }

  _divide(operand1, operand2) {
    return operand1 / operand2;
  }

  _validate_ouptut(result) {
    if (Number.isNaN(result) || result === POS_INF || result === NEG_INF) {
      throw new Error(ERROR_MESSAGE.INVALID_RESULT);
    }

    return;
  }

  _adjust_output(result) {
    if (Object.is(result, NEG_ZERO)) {
      return POS_ZERO;
    }

    return result.toFixed(DECIMAL_PLACE);
  }

  _display(result) {
    console.log(result);
  }

  calculate(operand1, operand2, operator) {
    try {
      let result = 0;

      this._validate_operands(operand1, operand2);

      switch (operator) {
        case "+":
          result = this._add(operand1, operand2);
          break;
        case "-":
          result = this._subtract(operand1, operand2);
          break;
        case "*":
          result = this._multiply(operand1, operand2);
          break;
        case "/":
          result = this._divide(operand1, operand2);
          break;
        default:
          throw new Error(ERROR_MESSAGE.INVALID_OPERATOR);
      }

      this._validate_output(result);

      this._display(this._adjust_output(result));
    } catch (error) {
      this._display(error.message);
    }
  }
}
