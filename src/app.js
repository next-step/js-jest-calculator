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
		isOperation: false,
		result: 0,
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
		$result.textContent = this.state.result;
		$input.textContent = this.state.input;
		$beforeNum.textContent = this.state.beforeNum;
	};
	const operator = {
		add,
		subtract,
		multiply,
		divide,
	};

	const getResult = (operatorType) => {
		if (!operatorType) {
			console.log("연산자를 먼저 입력해주세요."); // alert로 바꿔야함

			return;
		}

		return operator[operatorType](
			Number(this.state.beforeNum),
			Number(this.state.input)
		);
	};

	const acc = (beforeNum, input) => {
		if (beforeNum === 0) {
			return input;
		}

		return String(beforeNum) + String(input);
	};

	/**
	 * 입력받은 숫자 결과를 출력하는 컴포넌트
	 */
	const btnContainer = new BtnContainer({
		$target: $app,
		$initialState: {
			input: 0,
			beforeNum: 0,
		},
		$onResult: (operator) => {
			console.log("결과");
			const result = getResult(operator);
			console.log(result);
			this.setState({
				...this.state,
				beforeNum: String(result || ""),
				input: 0,
				result: result,
				isOperation: false,
			});
		},
		$onSetIsOperation: (isOperation) => {
			if (this.state.isOperation) {
				this.setState({
					...this.state,
					beforeNum: acc(this.state.beforeNum, this.state.input),
					input: 0,
					isOperation: isOperation,
				});
			} else {
				this.setState({
					...this.state,
					beforeNum: String(this.state.input || ""),
					input: 0,
					isOperation: isOperation,
				});
			}
		},
	});

	/**
	 * 숫자를 입력받는 컴포넌트
	 */

	const inputContainer = new InputContainer({
		$target: $app,
		$initialState: this.state.numStack,
		$onClick: (newInput) => {
			if (this.state.input.length > 2) {
				console.log("숫자는 세자리까지만 입력 가능합니다."); // alert로 바꿔야함
				console.log(this.state);
				return;
			}

			this.setState({
				...this.state,
				input: acc(this.state.input, newInput),
			});
		},
		$onReset: () => {
			this.setState({
				...this.state,
				input: 0,
			});
		},
	});

	inputContainer.render();
	btnContainer.render();
}
