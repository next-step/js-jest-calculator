export default function App({ $target }) {
	this.init = () => {
		console.log("App init");
	};
	this.render = () => {
		$target.innerHTML = "Hello world";
	};
}
