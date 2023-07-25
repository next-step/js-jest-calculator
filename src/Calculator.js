/**
 * Nextstep 온보딩 jest 계산기 미션
 *
 *
 * 1. 더하기
 * 2. 빼기
 * 3. 곱하기
 * 4. 나누기
 *
 * 1. 숫자는 세자리까지만 입력 가능합니다.
 * 2. 소수점 이하는 버립니다.
 *
 * @autor 양상우
 * @date 2023.07.24
 */

// add function

const add = (a, b) => {
	console.log("add");
	console.log(a, b);
	return cutFloat(a + b);
};

// subtract function

const subtract = (a, b) => {
	return cutFloat(a - b);
};

// multiply function

const multiply = (a, b) => {
	return cutFloat(a * b);
};

// divide function

const divide = (a, b) => {
	return cutFloat(a / b);
};

// cutFloat function

const cutFloat = (result) => {
	return Number(result.toFixed(0));
};

// inputLimitThreeNumber function

const inputLimitThreeNumber = (num) => {
	if (num > 999) {
		throw new Error("숫자는 세자리까지만 입력 가능합니다.");
	}
	return num;
};

export { add, subtract, multiply, divide, inputLimitThreeNumber };
