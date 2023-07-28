export const createEl = (tagName, className, text = "") => {
	const $el = document.createElement(tagName);
	if (className) $el.className = className;
	if (text) $el.textContent = text;
	return $el;
};
