export const sum = (nList) => {
  validateInputType(nList);
  validateInputLength(nList);
  return validateReturnLength(
    roundDown(nList.reduce((acc, cur) => acc + cur, 0))
  );
};

export const subtract = (nList) => {
  validateInputType(nList);
  validateInputLength(nList);
  return validateReturnLength(
    roundDown(nList.slice(1).reduce((acc, cur) => acc - cur, nList[0]))
  );
};

export const multiply = (nList) => {
  validateInputType(nList);
  validateInputLength(nList);
  return validateReturnLength(
    roundDown(nList.reduce((acc, cur) => acc * cur, 1))
  );
};

export const divide = (nList) => {
  validateInputType(nList);
  validateInputLength(nList);
  checkDivideToZero(nList.slice(1));
  return validateReturnLength(
    roundDown(nList.slice(1).reduce((acc, cur) => acc / cur, nList[0]))
  );
};

const roundDown = (n) => {
  if (n > 0) return Math.floor(n) === -0 ? 0 : Math.floor(n);
  return Math.ceil(n) === -0 ? 0 : Math.ceil(n);
};

const checkDivideToZero = (nList) => {
  for (const n of nList) {
    if (Math.abs(n) === 0) {
      throw new Error("0으로 나눌 수 없습니다.");
    }
  }
};

const validateInputType = (nList) => {
  for (const n of nList) {
    if (typeof n !== "number") throw new Error("계산기에 숫자만 입력해주세요.");
  }
};

const validateInputLength = (nList) => {
  for (const n of nList) {
    if (String(n).length > 3)
      throw new Error("입력 자리수가 세자리 초과입니다.");
  }
};

const validateReturnLength = (n) => {
  if (String(n).length > 3) throw new Error("연산 결과가 세자리 초과입니다.");
  return n;
};
