export default function Btn({ $target, $text, $onClick }) {
	const $btn = document.createElement("button");
	$btn.textContent = $text;

	this.render = () => {
		$target.appendChild($btn);
	};

	const registerEvent = () => {
		$btn.addEventListener("click", () => {
			$onClick();
		});
	};

	registerEvent();
}
