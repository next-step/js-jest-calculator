export default function Btn({ $target, $text, $onClick }) {
	const $btn = document.createElement("button");
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
