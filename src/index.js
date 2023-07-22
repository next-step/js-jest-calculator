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
  if (b === 0) {
    throw new Error("Cannot divide by 0.");
  }
  return Math.floor(a / b);
}

function calculate(operation) {
  const num1 = Number(document.getElementById("input1").value);
  const num2 = Number(document.getElementById("input2").value);

  const result = 0;
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

module.exports = { add, subtract, multiply, divide };