import { Calculator } from '../src'
import { ERROR_MSG } from '../src/constants'
import { validator } from '../src/utils'

/*
[요구사항]
- 2개의 숫자에 대해 덧셈이 가능하다.
- 2개의 숫자에 대해 뺄셈이 가능하다.
- 2개의 숫자에 대해 곱셈이 가능하다.
- 2개의 숫자에 대해 나눗셈이 가능하다.
- 숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.
- 계산 결과를 표현할 때 소수점 이하는 버림한다.

[추가 케이스]
- 만약 숫자 이외에 다른 값이 들어온다면?
- 만약 입력이 음수라면?
- 만약 소수점을 입력 받는다면?
*/

describe('validator의 동작을 확인한다.', () => {
  test.each([
    ['2', false],
    [0.55, true],
    [0.555, false],
    [-3, true],
    [10000, false],
  ])('3자리 까지의 숫자만 입력 가능 : %s is %s', (num, isValid) => {
    if (isValid) {
      expect(() => validator(num)).not.toThrow()
    } else {
      expect(() => validator(num)).toThrow()
    }
  })
})

describe('Calculator', () => {
  let calculator

  beforeEach(() => {
    calculator = new Calculator()
  })

  describe('calculator.sum()', () => {
    it('2개의 숫자에 대해 덧셈이 가능하다.', () => {
      const num1 = 2
      const num2 = 3

      calculator.sum(num1, num2)

      expect(calculator.value).toBe(5)
    })
  })

  describe('calculator.subtract()', () => {
    it('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
      const num1 = 3
      const num2 = 2

      calculator.subtract(num1, num2)

      expect(calculator.value).toBe(1)
    })
  })

  describe('calculator.multiple()', () => {
    it('2개의 숫자에 대해 곱셈이 가능하다.', () => {
      const num1 = 3
      const num2 = 2

      calculator.multiple(num1, num2)

      expect(calculator.value).toBe(6)
    })
  })

  describe('calculator.divide()', () => {
    it('2개의 숫자에 대해 나눗셈이 가능하다.', () => {
      const num1 = 4
      const num2 = 2

      calculator.divide(num1, num2)

      expect(calculator.value).toBe(2)
    })
  })

  describe.each([
    [1, 2],
    [3, 4],
    [5, 6],
  ])('calculator.getValue()', (num1, num2) => {
    it('계산 결과를 표현할 때 소수점 이하는 버림한다.', () => {
      calculator.sum(num1, num2)

      expect(Number.isInteger(calculator.value)).toBe(true)
    })
  })
})
