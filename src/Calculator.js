import { POS_ZERO, NEG_ZERO, POS_INF, NEG_INF } from "./constants/numbers";
import { DECIMAL_PLACE, ERROR_MESSAGE } from "./constants/settings";

export default class Calculator {
  add(operand1, operand2) {
    return operand1 + operand2;
  }

  subtarct(operand1, operand2) {
    return operand1 - operand2;
  }

  multiply(operand1, operand2) {
    return operand1 * operand2;
  }

  divide(operand1, operand2) {
    return operand1 / operand2;
  }

  display(result) {
    if (isNaN(result) || result === POS_INF || result === NEG_INF) {
      throw new Error(ERROR_MESSAGE);
    }

    if (Object.is(result, NEG_ZERO)) {
      return POS_ZERO;
    }

    return result.toFixed(DECIMAL_PLACE);
  }
}
