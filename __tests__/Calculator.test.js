import { Calculator } from "../src"

/*
[요구사항]
- 2개의 숫자에 대해 덧셈이 가능하다.
- 2개의 숫자에 대해 뺄셈이 가능하다.
- 2개의 숫자에 대해 곱셈이 가능하다.
- 2개의 숫자에 대해 나눗셈이 가능하다.
- 숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.
- 계산 결과를 표현할 때 소수점 이하는 버림한다.
*/

describe('계산기 구현', () => {

    it('2개의 숫자에 대해 덧셈이 가능하다.',() => {
      const num1 = 2
      const num2 = 3

      const sum = Calculator.sum(num1, num2)

      expect(sum).toBe(5)
    })

    it('2개의 숫자에 대해 뺄셈이 가능하다.',() => {
      const num1 = 3
      const num2 = 2

      const sum = Calculator.subtract(num1, num2)

      expect(sum).toBe(1)
    })

    it('2개의 숫자에 대해 곱셈이 가능하다.',() => {
      const num1 = 3
      const num2 = 2

      const sum = Calculator.multiple(num1, num2)

      expect(sum).toBe(6)
    })

    it('2개의 숫자에 대해 나눗셈이 가능하다.',() => {
      const num1 = 4
      const num2 = 2

      const sum = Calculator.divide(num1, num2)

      expect(sum).toBe(2)
    })
})