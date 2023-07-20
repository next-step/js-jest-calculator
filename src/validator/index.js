class Validator {
  static isError(errorCondition, errorMessage) {
    if (errorCondition) return errorMessage;
  }
}

export default Validator;
