let counterValue = 0;
let buttonElement;

function init() {
	buttonElement = document.getElementById("the-button");
}

function click_count() {
	counterValue++;
	buttonElement.innerHTML = counterValue;
}
