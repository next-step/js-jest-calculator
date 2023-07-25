import Btn from "@/components/Btn";
import { createEl } from "@/utils/createEl";

export default function App({ $target }) {
	const $app = createEl("div", "App");

	this.init = () => {
		console.log("App init");
		this.render();
	};
	this.render = () => {
		$target.appendChild($app);
	};

	const btn = new Btn({ $target: $app, $text: "버튼" });
	btn.render();
}
