import { createEl } from "@/utils/createEl";
import Btn from "@/components/Btn";
export default function InputContainer({
	$target,
	$initialState,
	$onClick,
	$onReset,
	$onDelete,
}) {
	const $inputContainer = createEl("div", "inputContainer");

	this.state = $initialState;

	this.setState = (nextState) => {
		this.state = nextState;
		this.render();
	};

	this.render = () => {
		$target.appendChild($inputContainer);
	};

	const numberArr = Array.from({ length: 9 }, (_, i) => i + 1);
	numberArr.push(0);

	numberArr.forEach((num) => {
		new Btn({
			$target: $inputContainer,
			$text: num,
			$onClick: () => {
				$onClick(num);
			},
		});
	});

	new Btn({
		$target: $inputContainer,
		$text: "C",
		$onClick: $onReset,
	});

	new Btn({
		$target: $inputContainer,
		$text: "D",
		$onClick: $onDelete,
	});
}
