import { createEl } from "@/utils/createEl";
import Btn from "@/components/Btn";
export default function InputContainer({
	$target,
	$initialState,
	$onClick,
	$onReset,
}) {
	const $inputContainer = createEl("div", "inputContainer");

	this.state = $initialState; // [0, 0]

	this.setState = (nextState) => {
		this.state = nextState;
		this.render();
	};

	this.render = () => {
		$target.appendChild($inputContainer);
	};

	const numberArr = Array.from({ length: 10 }, (_, i) => i);

	numberArr.forEach((num) => {
		const inputNum = new Btn({
			$target: $inputContainer,
			$text: num,
			$onClick: () => {
				console.log(`input${num}`);
				$onClick(num);
			},
		});
	});

	const inputClear = new Btn({
		$target: $inputContainer,
		$text: "C",
		$onClick: () => {
			console.log("inputClear");
			$onReset();
		},
	});

	const inputDelete = new Btn({
		$target: $inputContainer,
		$text: "D",
		$onClick: () => {
			console.log("inputDelete");
		},
	});
}
