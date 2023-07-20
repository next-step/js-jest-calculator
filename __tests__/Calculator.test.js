import Calculator from '../src/Calculator'

describe('계산기 덧셈 테스트', () => {
  test('sum(1,1) 의 결과값은 2다.', () => {
    const calculator = new Calculator()

    expect(calculator.sum(1, 1)).toBe(2)
  })
})

describe('계산기 뺄셈 테스트', () => {
  test('subtract(1,1) 의 결과값은 0이다.', () => {
    const calculator = new Calculator()

    expect(calculator.substract(1, 1)).toBe(0)
  })
})

describe('계산기 곱셈 테스트', () => {
  test('multiply(2,2) 의 결과값은 4다.', () => {
    const calculator = new Calculator()

    expect(calculator.multiply(2, 2)).toBe(4)
  })
})
