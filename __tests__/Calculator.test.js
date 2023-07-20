import Calculator from '../src/Calculator'

describe('계산기 덧셈 테스트', () => {
  test('sum(1,1) 의 결과값은 2다.', () => {
    const calculator = new Calculator()

    expect(calculator.sum(1, 1)).toBe(2)
  })
})
