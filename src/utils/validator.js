export class Validator {
  #firstInputNumber;
  #secondInputNumber;

  constructor(firstInputNumber, secondInputNumber) {
    this.#firstInputNumber = firstInputNumber;
    this.#secondInputNumber = secondInputNumber;
  }

  #checkMaxLength() {
    const MAX_LENGTH = 3;

    if (
      this.#firstInputNumber.length > MAX_LENGTH ||
      this.#secondInputNumber.length > MAX_LENGTH
    )
      throw new Error(`${MAX_LENGTH} 자리를 초과하는 수는 연산할 수 없습니다`);
  }

  checkValueValidation() {
    this.#checkMaxLength();
  }
}
