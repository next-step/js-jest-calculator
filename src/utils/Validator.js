import { VALIDATION_CONFIG } from "../constants/validator";
import { ERROR } from "../constants/error";

export class Validator {
  #firstInputNumber;
  #secondInputNumber;
  #arguments;

  constructor(firstInputNumber, secondInputNumber, argumentsData) {
    this.#firstInputNumber = firstInputNumber;
    this.#secondInputNumber = secondInputNumber;
    this.#arguments = argumentsData;
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

  #checkArgumentsAmount() {
    if (this.#arguments !== VALIDATION_CONFIG.ARGUMENTS_LENGTH)
      throw new Error(ERROR.OVERFLOW.ARGUMENTS);
  }

  checkValueValidation() {
    this.#checkMaxLength();
    this.#checkEmptyString();
    this.#checkArgumentsAmount();
  }
}
