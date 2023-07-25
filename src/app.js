import { createEl } from "@/utils/createEl";
import BtnContainer from "@/components/BtnContainer";
import InputContainer from "@/components/InputContainer";

import {
	add,
	subtract,
	multiply,
	divide,
	inputLimitThreeNumber,
} from "@/Calculator";

export default function App({ $target }) {
	const $app = createEl("div", "App");
	const $input = createEl("div", "input");
	const $beforeNum = createEl("div", "beforeNum");
	const $result = createEl("div", "result");
	$app.appendChild($result);
	$app.appendChild($input);
	$app.appendChild($beforeNum);

	this.state = {
		input: 0,
		beforeNum: 0,
		result: 0,
		isWrite: false,
	};

	this.setState = (nextState) => {
		this.state = nextState;
		this.render();
		console.log(this.state);
	};

	this.init = () => {
		console.log("App init");
		this.render();
	};
	this.render = () => {
		$target.appendChild($app);
		if (!this.state.isWrite) {
			$result.textContent = this.state.result;
		} else {
			$result.textContent = "안보여";
		}
		$input.textContent = this.state.input;
		$beforeNum.textContent = this.state.beforeNum;
	};

	const operator = {
		add,
		subtract,
		multiply,
		divide,
	};

	const calculateOperand = (operatorType) => {
		return operator[operatorType](this.state.beforeNum, this.state.input);
	};

	const acc = (beforeNum, input) => {
		return input + beforeNum * 10;
	};

	const onResult = (operatorType, result = false) => {
		console.log("onResult", operatorType, result);
		if (!operatorType) {
			console.log("연산자를 먼저 입력해주세요."); // alert로 바꿔야함
			return;
		}

		if (result) {
			this.setState({
				...this.state,
				isWrite: false,
			});
		}

		if (this.state.input === 0 && this.state.beforeNum === 0) {
			console.log("숫자를 먼저 입력해주세요."); // alert로 바꿔야함
			return;
		}

		if (this.state.beforeNum === 0 || isFinite(this.state.beforeNum)) {
			this.setState({
				...this.state,
				beforeNum: this.state.input,
				input: 0,
			});
			return;
		}

		const calculated = calculateOperand(operatorType);
		this.setState({
			...this.state,
			beforeNum: calculated,
			input: 0,
			result: calculated,
		});
	};

	/**
	 * 입력받은 숫자 결과를 출력하는 컴포넌트
	 */
	const btnContainer = new BtnContainer({
		$target: $app,
		$onResult: onResult,
	});

	/**
	 * 숫자를 입력받는 컴포넌트
	 */

	const onInputClick = (newInput) => {
		this.setState({
			...this.state,
			isWrite: true,
		});

		if (String(this.state.input).length > 2) {
			console.log("숫자는 세자리까지만 입력 가능합니다."); // alert로 바꿔야함
			console.log(this.state);
			return;
		}

		this.setState({
			...this.state,
			input: acc(this.state.input, newInput),
		});
	};

	const onInputReset = () => {
		this.setState({
			...this.state,
			input: 0,
		});
	};

	const inputContainer = new InputContainer({
		$target: $app,
		$initialState: this.state.numStack,
		$onClick: onInputClick,
		$onReset: onInputReset,
	});

	inputContainer.render();
	btnContainer.render();
}
