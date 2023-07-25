import {
	add,
	subtract,
	multiply,
	divide,
	inputLimitThreeNumber,
} from "@/Calculator";

import { createEl } from "@/utils/createEl";
import Btn from "@/components/Btn";
export default function BtnContainer({ $target, $initialState, $onClick }) {
	const $btnContainer = createEl("div", "BtnContainer");

	this.state = $initialState; // [0, 0]

	this.setState = (nextState) => {
		this.state = nextState;
		this.render();
	};

	this.render = () => {
		$target.appendChild($btnContainer);
	};

	const operation = (state, operator) => {
		const [a, b] = state;
		const result = operator(a, b);
		$onClick(result);
	};

	const plusBtn = new Btn({
		$target: $btnContainer,
		$text: "더하기 버튼",
		$onClick: () => {
			console.log("add");
			operation(this.state, add);
		},
	});

	const subtractBtn = new Btn({
		$target: $btnContainer,
		$text: "뺄셈 버튼",
		$onClick: () => {
			console.log("subtract");
			operation(this.state, subtract);
		},
	});

	const multiplyBtn = new Btn({
		$target: $btnContainer,
		$text: "곱셈 버튼",
		$onClick: () => {
			console.log("multiply");
			operation(this.state, multiply);
		},
	});

	const divideBtn = new Btn({
		$target: $btnContainer,
		$text: "나눗셈 버튼",
		$onClick: () => {
			console.log("divide");
			operation(this.state, divide);
		},
	});
	const resultBtn = new Btn({
		$target: $btnContainer,
		$text: "결과 버튼",
		$onClick: () => {
			console.log("result");
			// operation(this.state, add);
		},
	});

	plusBtn.render();
	subtractBtn.render();
	multiplyBtn.render();
	divideBtn.render();
	resultBtn.render();
}
