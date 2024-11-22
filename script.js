let counterValue = 0;
let buttonElement;
let randomCatFactElement;

function init() {
	buttonElement = document.getElementById("the-button");
	randomCatFactElement = document.getElementById("random-cat-fact");
	inject_cat_fact();
}

function click_count() {
	counterValue++;
	buttonElement.innerHTML = counterValue;
}

function inject_cat_fact() {
	fetch("https://cat-fact.herokuapp.com/facts/random").then(
		(res) => {
			if (res.ok) {
				res.json().then((re) => {
					randomCatFactElement.innerHTML = re.text;
			
				});
			}
		}
	);
}
