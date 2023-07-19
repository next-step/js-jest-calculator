class Validator {
  static isError(errorCondition, errorMessage) {
    try {
      if (errorCondition) throw new Error(errorMessage);
      return false;
    } catch (errorMessage) {
      return true;
    }
  }
}

export default Validator;
