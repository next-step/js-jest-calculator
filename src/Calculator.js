import { POS_ZERO, NEG_ZERO, POS_INF, NEG_INF } from "./constants";

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
      return "오류";
    }

    if (Object.is(result, NEG_ZERO)) {
      return 0;
    }

    return Math.floor(result);
  }
}
