/**
 * 온보딩 jest 계산기 미션
 *
 *
 */

// add function

const add = (a, b) => {
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
const cutFloat = (a) => {
	return Number(a.toFixed(0));
};

export { add, subtract, multiply, divide };
