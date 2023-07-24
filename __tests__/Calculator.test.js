const { add, subtract, multiply, divide } = require("../src/Calculator");

describe("Calculator-add", () => {
	test("add-defalut", () => {
		expect(add(1, 2)).toBe(3);
	});

	test("add-zero", () => {
		expect(add(1, 0)).toBe(1);
	});

	test("add-negative", () => {
		expect(add(1, -1)).toBe(0);
	});

	test("add-float", () => {
		expect(add(1.1, 1.1)).toBe(2.2);
	});
});

describe("Calculator-subtract", () => {
	test("subtract-defalut", () => {
		expect(subtract(2, 1)).toBe(1);
	});

	test("subtract-zero", () => {
		expect(subtract(1, 0)).toBe(1);
	});

	test("subtract-negative", () => {
		expect(subtract(1, -1)).toBe(2);
	});

	test("subtract-float", () => {
		expect(subtract(1.1, 1.1)).toBe(0);
	});
});

describe("Calculator-multiply", () => {
	test("multiply-defalut", () => {
		expect(multiply(2, 3)).toBe(6);
	});

	test("multiply-zero", () => {
		expect(multiply(1, 0)).toBe(0);
	});

	test("multiply-negative", () => {
		expect(multiply(1, -1)).toBe(-1);
	});

	test("multiply-float", () => {
		expect(multiply(1.1, 1.1)).toBe(1.21);
	});
});

describe("Calculator-divide", () => {
	test("divide-defalut", () => {
		expect(divide(6, 3)).toBe(2);
	});

	test("divide-zero", () => {
		expect(divide(1, 0)).toBe(Infinity);
	});

	test("divide-negative", () => {
		expect(divide(1, -1)).toBe(-1);
	});

	test("divide-float", () => {
		expect(divide(1.1, 1.1)).toBe(1);
	});
});
