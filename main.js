const countElement = document.getElementById("count");
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");

let count = 0;

decreaseButton.addEventListener("click", () => {
	count -= 1;
	countElement.textContent = count;
});

increaseButton.addEventListener("click", () => {
	count += 1;
	countElement.textContent = count;
});
