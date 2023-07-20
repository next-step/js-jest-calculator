import { VALIDATION_CONFIG } from "../constants/validator";
import { ERROR } from "../constants/error";

export class Validator {
  #firstInputNumber;
  #secondInputNumber;

  constructor(firstInputNumber, secondInputNumber) {
    this.#firstInputNumber = firstInputNumber;
    this.#secondInputNumber = secondInputNumber;
  }

  #checkMaxLength() {
    const maxLength = VALIDATION_CONFIG.MAX_INPUT_LENGTH;
    if (
      this.#firstInputNumber.length > maxLength ||
      this.#secondInputNumber.length > maxLength
    )
      throw new Error(ERROR.OVERFLOW.MAX_LENGTH(maxLength));
  }

  checkValueValidation() {
    this.#checkMaxLength();
  }
}
