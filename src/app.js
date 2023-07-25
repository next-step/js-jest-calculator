import Btn from "@/components/Btn";
import { createEl } from "@/utils/createEl";
import BtnContainer from "./components/BtnContainer";

export default function App({ $target }) {
	const $app = createEl("div", "App");
	const $result = createEl("div", "result");
	$app.appendChild($result);

	this.state = {
		// numStack: Array.from({ length: 2 }, () => 0),
		numStack: [1, 1],
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
	};

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

	btnContainer.render();
}
