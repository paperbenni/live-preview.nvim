function livepreview_renderKatex() {
	renderMathInElement(document.body, {
		delimiters: [
			{ left: '$$', right: '$$', display: true },
			{ left: '$', right: '$', display: false },
			{ left: '\\(', right: '\\)', display: false },
			{ left: '\\[', right: '\\]', display: true }
		],
		throwOnError: false,
		displayMode: true,
		output: "html",
		trust: true,
		strict: false,
	});
}

document.addEventListener("DOMContentLoaded", function() {
	livepreview_renderKatex();
});
