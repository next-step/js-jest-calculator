import { createEl } from "@/utils/createEl";
import { $ } from "@/utils/selector.js";
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
	this.$app = createEl("div", "App");
	const $outPannel = createEl("div", "outPannel");

	this.$app.appendChild($outPannel);

	const $input = createEl("div", "input");
	const $beforeNum = createEl("div", "beforeNum");
	const $result = createEl("div", "result hidden");
	$outPannel.appendChild($beforeNum);
	$outPannel.appendChild($input);
	$outPannel.appendChild($result);

	const $inputPannel = createEl("div", "inputPannel");
	this.$app.appendChild($inputPannel);

	this.state = {
		input: 0,
		beforeNum: 0,
		result: 0,
		isWrite: true,
	};

	this.setState = (nextState) => {
		this.state = nextState;
		this.render();
	};

	this.init = () => {
		this.render();
	};

	this.render = () => {
		$target.appendChild(this.$app);

		if (!this.state.isWrite) {
			$result.classList.remove("hidden");
			$input.classList.add("hidden");
			$beforeNum.classList.add("hidden");
			$result.textContent = this.state.result;
		} else {
			$input.classList.remove("hidden");
			$beforeNum.classList.remove("hidden");
			$result.classList.add("hidden");
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
		if (!operatorType) {
			alert("연산자를 먼저 입력해주세요.");
			return;
		}

		if (result) {
			this.setState({
				...this.state,
				isWrite: false,
			});
		}

		if (this.state.input === 0 && this.state.beforeNum === 0) {
			alert("숫자를 먼저 입력해주세요.");
			return;
		}

		if (this.state.beforeNum === 0) {
			this.setState({
				...this.state,
				beforeNum: this.state.input,
				input: 0,
			});
			return;
		}

		const calculated = calculateOperand(operatorType);

		if (isFinite(calculated) === false) {
			alert("0으로 나눌 수 없습니다.");
			return;
		}

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
		$target: $inputPannel,
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
			alert("숫자는 세자리까지만 입력 가능합니다.");
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
			beforeNum: 0,
			result: 0,
			isWrite: true,
		});
	};

	const onInputDelete = () => {
		this.setState({
			...this.state,
			input: Math.floor(this.state.input / 10),
		});
	};

	const inputContainer = new InputContainer({
		$target: $inputPannel,
		$initialState: this.state.numStack,
		$onClick: onInputClick,
		$onReset: onInputReset,
		$onDelete: onInputDelete,
	});

	this.init();
	inputContainer.render();
	btnContainer.render();
}
