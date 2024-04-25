import { Calculator } from '../src/index';

describe('Caculator Input Number', () => {
  test('2가지의 입력값을 가진다.', () => {
    const calculator = new Calculator();

    expect(calculator.add(10, 20)).toBe(30);
  });

  test('2가지 입력값 이상의 값을 가지지 못한다.', () => {
    const calculator = new Calculator();

    expect(calculator.add(10, 20, 30)).toBe(null);
  });

  test('숫자는 최대 3가지수 까지만 가능하다.', () => {
    const calculator = new Calculator();

    expect(calculator.checkNumberLength(1000, 2000)).toBe(false);
  });

  test('계산결과 표현은 소수점 이하는 버린다.', () => {
    const calculator = new Calculator();

    expect(calculator.add(10.1, 20)).toBe(30);
  });
});

describe('계관관련 내용', () => {
  test('두가지 숫자 더하기', () => {
    const calculator = new Calculator();

    expect(calculator.add(10, 20)).toBe(30);
  });

  test('두 숫자 빼기', () => {
    const calculator = new Calculator();

    expect(calculator.sub(30, 20)).toBe(10);
  });

  test('두 숫자 곱하기', () => {
    const calculator = new Calculator();

    expect(calculator.mul(10, 20)).toBe(200);
  });

  test('두 숫자 나누기', () => {
    const calculator = new Calculator();

    expect(calculator.div(30, 10)).toBe(3);
  });
});
