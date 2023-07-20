describe('계산기', () => {
  it('2개의 숫자를 더하면 덧셈이 가능하다', () => {
    const a = 1;
    const b = 2;

    const calculator = new Calculator();
    const sumResult = calculator.sum(a, b);

    expect(sumResult).toBe(a + b);
  });
});
