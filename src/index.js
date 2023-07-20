// 기능 요구사항
// 2개의 숫자에 대해 덧셈이 가능하다.
// 2개의 숫자에 대해 뺄셈이 가능하다.
// 2개의 숫자에 대해 곱셈이 가능하다.
// 2개의 숫자에 대해 나눗셈이 가능하다.
// 숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.
// 계산 결과를 표현할 때 소수점 이하는 버림한다.

function add(a, b) {
    return Math.floor(a + b);
}

function subtract(a, b) {
    return Math.floor(a - b);
}

function multiply(a, b) {
    return Math.floor(a * b);
}

function divide(a, b) {
    return Math.floor(a / b);
}

function calculate(operation) {
    const num1 = Number(document.getElementById("input1").value);
    const num2 = Number(document.getElementById("input2").value);
  
    let result;
    switch (operation) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break;
      case '/':
        result = divide(num1, num2);
        break;
      default:
        result = "Error";
    }
  
    document.getElementById("result").textContent = `= ${result}`;
  }

function limitToThreeDigits(id) {
    const inputElement = document.getElementById(id);
    const inputValue = inputElement.value;
    inputElement.value = inputValue.replace(/\D/g, '').substring(0, 3);
}
