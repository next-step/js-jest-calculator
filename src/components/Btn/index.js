import { createEl } from "@/utils/createEl.js";
export default function Btn({ $target, $text, $onClick }) {
	const $btn = createEl("button", "btn");
	$btn.textContent = $text;

	this.render = () => {
		$target.appendChild($btn);
	};

	const init = () => {
		this.render();
	};

	const registerEvent = () => {
		$btn.addEventListener("click", () => {
			$onClick();
		});
	};

	init();
	registerEvent();
}
