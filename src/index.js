const add = (a, b) => {
  if(a > 999 || b > 999) {
    throw new Error("숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다.");
  }
  return Math.floor(a + b);
}

const subtraction = (a, b) => {
  if(a > 999 || b > 999) {
    throw new Error("숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다.");
  }
  return Math.floor(a - b);
}

const division = (a, b) => {
  if(a > 999 || b > 999) {
    throw new Error("숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다.");
  }
  return Math.floor(a / b);
}

const multiplication = (a, b) => {
  if(a > 999 || b > 999) {
    throw new Error("숫자는 한번에 최대 3자리 수까지만 다룰 수 있습니다.");
  }
  return Math.floor(a * b);
}

module.exports = {
  add,
  subtraction,
  division,
  multiplication
};