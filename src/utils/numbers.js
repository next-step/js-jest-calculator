import { MAX_OPERAND_LENGTH, DECIMAL_PLACE } from "../constants/settings";

// 정수부 자리수 반환 함수
export function get_digits(number) {
  return parseInt(Math.abs(number)).toString().length;
}

// 테스트 코드에서 필요한 상수 constants/setting 기반으로 생성해 배열 형태로 반환
// MAX_OPERAND_LENGTH를 넘지 않는 유효한 길이의 [양의 정수, 음의 정수, 양의 실수, 음의 실수] 반환
const base = "1";
export function get_valid_num_arr() {
  const int = Number(base.repeat(MAX_OPERAND_LENGTH));
  const float = Number(int + "." + base.repeat(MAX_OPERAND_LENGTH));
  return [int, -1 * int, float, -1 * float];
}

// MAX_OPERAND_LENGTH을 넘는 유효하지 않은 길이의 [양의 정수, 음의 정수, 양의 실수, 음의 실수] 반환
export function get_invalid_num_arr() {
  const int = Number(base.repeat(MAX_OPERAND_LENGTH + 1));
  const float = Number(int + "." + base.repeat(MAX_OPERAND_LENGTH + 1));
  return [int, -1 * int, float, -1 * float];
}
