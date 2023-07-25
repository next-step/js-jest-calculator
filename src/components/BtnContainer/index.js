import { createEl } from "@/utils/createEl";
import Btn from "@/components/Btn";
export default function BtnContainer({ $target, $onResult }) {
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

	const operatorType = ["add", "subtract", "multiply", "divide", "result"];

	const onSetOperationType = (operationType) => {
		if (operationType === "result") {
			$onResult(this.state.operation, true);
			return;
		}

		this.setState({
			...this.state,
			operation: operationType,
		});

		$onResult(this.state.operation);
	};

	const typeIcon = {
		add: "+",
		subtract: "-",
		multiply: "x",
		divide: "/",
		result: "=",
	};

	operatorType.forEach((type) => {
		new Btn({
			$target: $btnContainer,
			$text: `${typeIcon[type]}`,
			$onClick: () => onSetOperationType(type),
		});
	});
}
