class CustomError {
  static DIGITS = new Error(
    '숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다!'
  );
  static DIVISION = new Error('0으로 나눌 수는 없습니다!');
}

export default CustomError;
