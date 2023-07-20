import { ERROR_MESSAGE } from '../src/constants/message'
import { Calculator } from '../src/app'


describe('Calculator - Feature', () => {
  let calculator

  beforeEach(() => {
    calculator = new Calculator()
  })

  describe('calculator.sum()', () => {
    it('2개의 양수에 대해 덧셈이 가능해야 합니다.', () => {
      // Given
      const numA = 2
      const numB = 3

      // When
      calculator.sum(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(5)
    })

    it('2개의 음수에 대해 덧셈이 가능해야 합니다.', () => {
      // Given
      const numA = -2
      const numB = -3

      // When
      calculator.sum(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(-5)
    })

    it('1개의 음수와 1개의 양수에 대해 덧셈이 가능해야 합니다.', () => {
      // Given
      const numA = 20
      const numB = -31

      // When
      calculator.sum(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(-11)
    })

    it('1개의 양수와 1개의 양의 소수에 대해 덧셈을 하는 경우, 소수점 이하는 버림해서 보여주어야 합니다.', () => {
      // Given
      const numA = 2
      const numB = 3.555555555

      // When
      calculator.sum(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(5)
    })

    it('1개의 양수와 1개의 음의 소수에 대해 덧셈을 하는 경우, 소수점 이하는 버림해서 보여주어야 합니다.', () => {
      // Given
      const numA = 2
      const numB = -3.555555555

      // When
      calculator.sum(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(-1)
    })
  })

  describe('calculator.subtract()', () => {
    it('2개의 양수에 대해 뺄셈이 가능해야 합니다.', () => {
      // Given
      const numA = 2
      const numB = 3

      // When
      calculator.subtract(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(-1)
    })

    it('2개의 음수에 대해 뺄셈이 가능해야 합니다.', () => {
      // Given
      const numA = -2
      const numB = -3

      // When
      calculator.subtract(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(-5)
    })

    it('1개의 음수와 1개의 양수에 대해 뺄셈이 가능해야 합니다.', () => {
      // Given
      const numA = 2
      const numB = -3

      // When
      calculator.subtract(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(-1)
    })

    it('1개의 양수와 1개의 양의 소수에 대해 뺄셈을 하는 경우, 소수점 이하는 버림해서 보여주어야 합니다.', () => {
      // Given
      const numA = 1
      const numB = 2.44444444

      // When
      calculator.subtract(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(-1)
    })

    it('1개의 양수와 1개의 음의 소수에 대해 뺄셈을 하는 경우, 소수점 이하는 버림해서 보여주어야 합니다.', () => {
      // Given
      const numA = 3
      const numB = -2.44444444

      // When
      calculator.subtract(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(0)
    })
  })

  describe('calculator.multiply()', () => {
    it('2개의 양수에 대해 곱셈이 가능해야 합니다.', () => {
      // Given
      const numA = 2
      const numB = 3

      // When
      calculator.multiply(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(6)
    })

    it('2개의 음수에 대해 곱셈이 가능해야 합니다.', () => {
      // Given
      const numA = -2
      const numB = -3

      // When
      calculator.multiply(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(6)
    })

    it('1개의 음수와 1개의 양수에 대해 곱셈이 가능해야 합니다.', () => {
      // Given
      const numA = 20
      const numB = -31

      // When
      calculator.multiply(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(-620)
    })

    it('1개의 양수와 1개의 양의 소수에 대해 곱셈을 하는 경우, 소수점 이하는 버림해서 보여주어야 합니다.', () => {
      // Given
      const numA = 2
      const numB = 3.555555555

      // When
      calculator.multiply(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(7)
    })

    it('1개의 양수와 1개의 음의 소수에 대해 곱셈을 하는 경우, 소수점 이하는 버림해서 보여주어야 합니다.', () => {
      // Given
      const numA = 1
      const numB = -2.44444444

      // When
      calculator.multiply(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(-2)
    })
  })

  describe('calculator.divide()', () => {
    it('2개의 양수에 대해 나눗셈이 가능해야 합니다.', () => {
      // Given
      const numA = 6
      const numB = 3

      // When
      calculator.divide(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(2)
    })

    it('2개의 음수에 대해 나눗셈이 가능해야 합니다.', () => {
      // Given
      const numA = -6
      const numB = -3

      // When
      calculator.divide(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(2)
    })

    it('1개의 양수와 1개의 음수에 대해 나눗셈이 가능해야 합니다.', () => {
      // Given
      const numA = -6
      const numB = 3

      // When
      calculator.divide(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(-2)
    })

    it('1개의 양수와 1개의 양의 소수에 대해 나눗셈을 하는 경우, 소수점 이하는 버림해서 보여주어야 합니다.', () => {
      // Given
      const numA = 2
      const numB = 3.555555555

      // When
      calculator.divide(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(0)
    })

    it('1개의 양수와 1개의 음의 소수에 대해 나눗셈을 하는 경우, 소수점 이하는 버림해서 보여주어야 합니다.', () => {
      // Given
      const numA = 2
      const numB = -3.444444

      // When
      calculator.divide(numA, numB)

      // Then
      expect(calculator.getValue()).toBe(0)
    })
  })

  it('계산 결과를 표현할 때 소수점 이하는 버림해서 보여주어야 합니다.', () => {
    // Given
    const numA = 10
    const numB = 3

    // When
    calculator.divide(numA, numB)

    // Then
    expect(calculator.getValue()).toBe(3)
  })
 })

 describe('Calculator - Validator', () => {
  let calculator

  beforeEach(() => {
    calculator = new Calculator()
  })

  it('입력 값이 3자리 수가 넘어가는 경우, 올바르지 않은 자릿수에 대한 에러 메시지를 반환해야 합니다.', () => {
    // Given
    const numA = 6000
    const numB = 3

    // When, Then
    expect(() => {
      calculator.sum(numA, numB)
    }).toThrow(new Error(ERROR_MESSAGE.INVALID_DIGIT))
  })

  it('값에 직접 접근하는 경우, 직접 접근에 대한 에러 메시지를 반환해야 합니다.', () => {
    // When, Then
    expect(() => {
      calculator.value
    }).toThrow(new Error(ERROR_MESSAGE.NOT_ACCESS_VALUE))
  })

  it('새로운 메서드를 추가하는 경우, 지원하지 않는 메서드에 대한 에러 메시지를 반환해야 합니다.', () => {
    // When, Then
    expect(() => {
      calculator.newMethod = () => {}
    }).toThrow(new Error(ERROR_MESSAGE.NOT_SUPPORT))
  })

  it('입력받은 값이 숫자가 아닌 경우, 입력값의 타입에 대한 에러 메시지를 반환해야 합니다.', () => {
    // Given
    const numA = '1'
    const numB = 2

    // When, Then
    expect(() => {
      calculator.sum(numA, numB)
    }).toThrow(new Error(ERROR_MESSAGE.INVALID_NUMBER))
  })
 })