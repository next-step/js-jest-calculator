class Calculator {
  sum(a, b) {
    if (a > 999) {
      throw new Error('숫자 범위가 3자리를 넘을 수 없습니다.')
    }
    if (b > 999) {
      throw new Error('숫자 범위가 3자리를 넘을 수 없습니다.')
    }

    return a + b
  }

  substract(a, b) {
    return a - b
  }

  multiply(a, b) {
    return a * b
  }

  divide(a, b) {
    return a / b
  }
}

export default Calculator
