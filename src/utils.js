import { MAX_NUMBER, MIN_NUMBER, ERROR_MESSAGE } from "./constants";

const checkIsNumber = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error(ERROR_MESSAGE.IS_NOT_NUMBER);
  }

  return true;
};

const checkNumberScope = (a, b) => {
  if (
    a >= MAX_NUMBER ||
    b >= MAX_NUMBER ||
    a <= MIN_NUMBER ||
    b <= MIN_NUMBER
  ) {
    throw new Error(ERROR_MESSAGE.NUMBER_SCOPE);
  }

  return true;
};

export const validateNumbers = (a, b) => {
  try {
    checkIsNumber(a, b);
    checkNumberScope(a, b);
  } catch (e) {
    console.error(e.message);
  }
};

export const getOnlyInteger = (result) => {
  return Math.floor(result);
};
