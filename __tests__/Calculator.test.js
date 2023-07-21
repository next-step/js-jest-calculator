import { Calculator } from '../src'
import { validator } from '../src/utils'

describe('validator의 동작을 확인한다.', () => {
  test.each([
    ['2', false],
    [0.55, true],
    [0.555, true],
    [-3, true],
    [10000, false],
  ])('validator(%s) => %s', (num, isValid) => {
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

  describe('2개의 숫자에 대해 덧셈이 가능하다.', () => {
    test.each([
      [1, 2, 3],
      [-2, 3, 1],
      [-2, -3, -5],
      [0.5, 0.5, 1],
      [0.555555555555, 1.534455, 2],
      [-0.555555555555, -1.534455, -2],
    ])('calculator.sum(%s, %s) => %s', (num1, num2, expected) => {
      calculator.sum(num1, num2)
      expect(calculator.value).toBe(expected)
    })
  })

  describe('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
    test.each([
      [3, 2, 1],
      [-2, 3, -5],
      [-2, -3, 1],
      [0.5, 0.5, 0],
      [0.555555555555, 1.534455, 0],
      [-3.555555555555, -1.534455, -2],
    ])('calculator.subtract(%s, %s) => %s', (num1, num2, expected) => {
      calculator.subtract(num1, num2)
      expect(calculator.value).toBe(expected)
    })
  })

  describe('2개의 숫자에 대해 곱셈이 가능하다.', () => {
    test.each([
      [3, 2, 6],
      [-2, 3, -6],
      [-2, -3, 6],
      [0.5, 13.4, 6],
      [0.555555555555, 15.534455, 8],
      [-3.555555555555, -1.534455, 5],
      [-3.555555555555, 1.534455, -5],
    ])('calculator.multiple(%s, %s) => %s', (num1, num2, expected) => {
      calculator.multiple(num1, num2)
      expect(calculator.value).toBe(expected)
    })
  })

  describe('2개의 숫자에 대해 나눗셈이 가능하다.', () => {
    test.each([
      [4, 2, 2],
      [3, 2, 1],
      [-2, 3, 0],
      [-8, 2, -4],
      [-7, -5, 1],
      [144.3, 13.4, 10],
      [15.555555555555, 3.534455, 4],
      [-3.555555555555, -1.534455, 2],
      [-3.555555555555, 1.534455, -2],
      [0, 0, 0],
    ])('calculator.divide(%s, %s)', (num1, num2, expected) => {
      calculator.divide(num1, num2)
      expect(calculator.value).toBe(expected)
    })
  })

  describe('계산 결과를 표현할 때 소수점 이하는 버림한다.', () => {
    describe.each([
      [144.3, 13.4],
      [15.555555555555, 3.534455],
      [-3.555555555555, -1.534455],
      [-3.555555555555, 1.534455],
      [0, 0],
    ])('계산 결과를 표현할 때 소수점 이하는 버림한다.', (num1, num2) => {
      it(`sum : calculator.getValue(${num1}, ${num2})`, () => {
        calculator.sum(num1, num2)
        const result = calculator.getValue()
        expect(Number.isInteger(result) || result === 0).toBe(true)
      })

      it(`subtract : calculator.getValue(${num1}, ${num2})`, () => {
        calculator.subtract(num1, num2)
        const result = calculator.getValue()
        expect(Number.isInteger(result) || result === 0).toBe(true)
      })

      it(`multiple : calculator.getValue(${num1}, ${num2})`, () => {
        calculator.multiple(num1, num2)
        const result = calculator.getValue()
        expect(Number.isInteger(result) || result === 0).toBe(true)
      })

      it(`divide : calculator.getValue(${num1}, ${num2})`, () => {
        calculator.divide(num1, num2)
        const result = calculator.getValue()
        expect(Number.isInteger(result) || result === 0).toBe(true)
      })
    })
  })
})
