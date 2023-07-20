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

  #checkEmptyString() {
    if (this.#firstInputNumber === "" || this.#secondInputNumber === "")
      throw new Error(ERROR.INPUT.EMPTY_STRING);
  }

  checkValueValidation() {
    this.#checkMaxLength();
    this.#checkEmptyString();
  }
}
