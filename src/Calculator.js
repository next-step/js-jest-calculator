export const sum = (nList) => {
  validateInputType(nList);
  validateInputLength(nList);
  return validateReturnLength(
    Math.floor(nList.reduce((acc, cur) => acc + cur, 0))
  );
};

export const subtract = (nList) => {
  validateInputType(nList);
  validateInputLength(nList);
  return validateReturnLength(
    Math.floor(nList.reduce((acc, cur) => acc - cur, nList[0] * 2))
  );
};

export const multiply = (nList) => {
  validateInputType(nList);
  validateInputLength(nList);
  return validateReturnLength(
    Math.floor(nList.reduce((acc, cur) => acc * cur, 1))
  );
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
