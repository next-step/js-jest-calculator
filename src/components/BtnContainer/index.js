import { createEl } from "@/utils/createEl";
import Btn from "@/components/Btn";
export default function BtnContainer({
	$target,
	$initialState,
	$onClick,
	$onSetIsOperation,
	$onResult,
}) {
	const $btnContainer = createEl("div", "BtnContainer");

	this.state = {
		operation: "",
	};

	this.setState = (nextState) => {
		this.state = nextState;
		this.render();
	};

	this.render = () => {
		$target.appendChild($btnContainer);
	};

	new Btn({
		$target: $btnContainer,
		$text: "더하기 버튼",
		$onClick: () => {
			console.log("add");
			$onSetIsOperation(true);
			this.setState({
				...this.state,
				operation: "add",
			});
		},
	});

	new Btn({
		$target: $btnContainer,
		$text: "뺄셈 버튼",
		$onClick: () => {
			console.log("subtract");
			$onSetIsOperation(true);
			this.setState({
				...this.state,
				operation: "subtract",
			});
		},
	});

	new Btn({
		$target: $btnContainer,
		$text: "곱셈 버튼",
		$onClick: () => {
			console.log("multiply");
			$onSetIsOperation(true);
			this.setState({
				...this.state,
				operation: "multiply",
			});
		},
	});

	new Btn({
		$target: $btnContainer,
		$text: "나눗셈 버튼",
		$onClick: () => {
			console.log("divide");
			$onSetIsOperation(true);
			this.setState({
				...this.state,
				operation: "divide",
			});
		},
	});
	new Btn({
		$target: $btnContainer,
		$text: "결과 버튼",
		$onClick: () => {
			if (this.state.operation === false) return;
			console.log("result");
			$onResult(this.state.operation);
		},
	});
}
