import { MAX_OPERAND_LENGTH, DECIMAL_PLACE } from "../constants/settings";

// 정수부 자리수 반환 함수
export function getDigits(number) {
  return parseInt(Math.abs(number)).toString().length;
}

// 테스트 코드에서 필요한 상수 constants/setting 기반으로 생성해 배열 형태로 반환
// MAX_OPERAND_LENGTH를 넘지 않는 유효한 길이의 [양의 정수, 음의 정수, 양의 실수, 음의 실수] 반환
const base = "1";
export function getValidNums() {
  const INT = Number(base.repeat(MAX_OPERAND_LENGTH));
  const FLT = Number(INT + "." + base.repeat(MAX_OPERAND_LENGTH));
  return [INT, -1 * INT, FLT, -1 * FLT];
}

// MAX_OPERAND_LENGTH을 넘는 유효하지 않은 길이의 [양의 정수, 음의 정수, 양의 실수, 음의 실수] 반환
export function getInvalidNums() {
  const INT = Number(base.repeat(MAX_OPERAND_LENGTH + 1));
  const FLT = Number(INT + "." + base.repeat(MAX_OPERAND_LENGTH + 1));
  return [INT, -1 * INT, FLT, -1 * FLT];
}
