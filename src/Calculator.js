export const sum = (nList) => {
  inputNumTypeCheck(nList);
  return validateLength(Math.floor(nList.reduce((acc, cur) => acc + cur, 0)));
};

const inputNumTypeCheck = (nList) => {
  for (const n of nList) {
    if (typeof n !== "number") throw new Error("계산기에 숫자만 입력해주세요.");
  }
};

const validateLength = (n) => {
  if (Math.floor(n / 100) >= 10)
    throw new Error("연산 결과가 세자리 이상입니다.");
  return n;
};
