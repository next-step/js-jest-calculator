import { acceptThreeDigit, removeDecimalPoint } from "./helper";
import { ERROR_MESSAGE } from "./constants/errorMessage";

export const calculator = {
  sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      return ERROR_MESSAGE["number-type"];

    if (!acceptThreeDigit(a + b)) return ERROR_MESSAGE["accept-three-digit"];

    return removeDecimalPoint(a + b);
  },

  substract(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      return ERROR_MESSAGE["number-type"];

    if (!acceptThreeDigit(a - b)) return ERROR_MESSAGE["accept-three-digit"];

    return removeDecimalPoint(a - b);
  },

  multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      return ERROR_MESSAGE["number-type"];

    if (!acceptThreeDigit(a * b)) return ERROR_MESSAGE["accept-three-digit"];

    return removeDecimalPoint(a * b);
  },

  divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      return ERROR_MESSAGE["number-type"];

    if (!acceptThreeDigit(a / b)) return ERROR_MESSAGE["accept-three-digit"];

    return removeDecimalPoint(a / b);
  },
};
