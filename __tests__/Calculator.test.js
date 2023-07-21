import Calculator from '../src/Calculator'
import { ERROR_BY_VALIDATE } from '../src/Calculator/constants'

const calculator = new Calculator()

describe('계산기 덧셈 테스트', () => {
  test('sum(1,1) 의 결과값은 2다.', () => {
    expect(calculator.sum(1, 1)).toBe(2)
  })
})

describe('계산기 뺄셈 테스트', () => {
  test('subtract(1,1) 의 결과값은 0이다.', () => {
    expect(calculator.substract(1, 1)).toBe(0)
  })
})

describe('계산기 곱셈 테스트', () => {
  test('multiply(2,2) 의 결과값은 4다.', () => {
    expect(calculator.multiply(2, 2)).toBe(4)
  })
})

describe('계산기 나눗셈 테스트', () => {
  test('divide(2,2) 의 결과값은 1이다.', () => {
    expect(calculator.divide(2, 2)).toBe(1)
  })
})

describe('다룰 수 있는 숫자의 범위 테스트 ', () => {
  describe('덧셈 범위', () => {
    test('첫번째 인자 숫자의 범위가 3자리가 넘어가면 에러가 발생한다', () => {
      expect(() => calculator.sum(1000, 5)).toThrow(
        ERROR_BY_VALIDATE.OVER_MAX_NUMBER
      )
    })
    test('두번째 인자 숫자의 범위가 3자리가 넘어가면 에러가 발생한다', () => {
      expect(() => calculator.sum(1, 1000)).toThrow(
        ERROR_BY_VALIDATE.OVER_MAX_NUMBER
      )
    })
  })

  describe('뺄셈 범위', () => {
    test('첫번째 인자 숫자의 범위가 3자리가 넘어가면 에러가 발생한다', () => {
      expect(() => calculator.substract(1000, 5)).toThrow(
        ERROR_BY_VALIDATE.OVER_MAX_NUMBER
      )
    })
    test('두번째 인자 숫자의 범위가 3자리가 넘어가면 에러가 발생한다', () => {
      expect(() => calculator.substract(1, 1000)).toThrow(
        ERROR_BY_VALIDATE.OVER_MAX_NUMBER
      )
    })
  })

  describe('곱셈 범위', () => {
    test('첫번째 인자 숫자의 범위가 3자리가 넘어가면 에러가 발생한다', () => {
      expect(() => calculator.multiply(1000, 5)).toThrow(
        ERROR_BY_VALIDATE.OVER_MAX_NUMBER
      )
    })
    test('두번째 인자 숫자의 범위가 3자리가 넘어가면 에러가 발생한다', () => {
      expect(() => calculator.multiply(1, 1000)).toThrow(
        ERROR_BY_VALIDATE.OVER_MAX_NUMBER
      )
    })
  })
})
