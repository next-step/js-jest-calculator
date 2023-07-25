export default function Btn({ $target, $text }) {
	const $btn = document.createElement("button");
	$btn.textContent = $text;

	this.render = () => {
		$target.appendChild($btn);
	};

	const registerEvent = () => {
		$btn.addEventListener("click", () => {
			console.log("click");
		});
	};

	registerEvent();
}
