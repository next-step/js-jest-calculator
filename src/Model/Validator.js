import { VALIDATION_CONFIG, TYPE, DEFAULT_VALUE, ERROR } from '../constants/';

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
    if (
      this.#firstInputNumber === VALIDATION_CONFIG.EMPTY_STRING ||
      this.#secondInputNumber === VALIDATION_CONFIG.EMPTY_STRING
    )
      throw new Error(ERROR.INPUT.EMPTY_STRING);
  }

  #checkArgumentsAmount() {
    let argumentsAmount = DEFAULT_VALUE.ARGUMENT_AMOUNT;
    for (let argument of this.#arguments) if (argument) argumentsAmount++;

    if (argumentsAmount !== VALIDATION_CONFIG.ARGUMENTS_LENGTH)
      throw new Error(ERROR.OVERFLOW.ARGUMENTS);
  }

  #checkDataType() {
    if (
      typeof this.#firstInputNumber !== TYPE.NUMBER ||
      typeof this.#secondInputNumber !== TYPE.NUMBER
    )
      throw new Error(ERROR.TYPE.INVALID);
  }

  #checkDecimal() {
    if (
      !Number.isInteger(this.#firstInputNumber) ||
      !Number.isInteger(this.#secondInputNumber)
    )
      throw new Error(ERROR.INPUT.DECIMAL);
  }

  checkValueValidation() {
    this.#checkEmptyString();
    this.#checkArgumentsAmount();
    this.#checkMaxLength();
    this.#checkDataType();
    this.#checkDecimal();
  }
}
