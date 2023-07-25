import { createEl } from "@/utils/createEl";
import BtnContainer from "@/components/BtnContainer";
import InputContainer from "@/components/InputContainer";

export default function App({ $target }) {
	const $app = createEl("div", "App");
	const $input = createEl("div", "input");
	const $result = createEl("div", "result");
	$app.appendChild($result);
	$app.appendChild($input);

	this.state = {
		// numStack: Array.from({ length: 2 }, () => 0),
		input: 0,
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
	};

	/**
	 * 입력받은 숫자 결과를 출력하는 컴포넌트
	 */
	const btnContainer = new BtnContainer({
		$target: $app,
		$initialState: this.state.numStack,
		$onClick: (result) => {
			this.setState({
				...this.state,
				result: result,
			});
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
				return;
			}

			this.setState({
				...this.state,
				input: String(this.state.input || "") + newInput,
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
