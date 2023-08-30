// script.js
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomButton");

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Function to set the initial gradient background and color inputs on page load
function setInitialBackground() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

	css.textContent = "Initial CSS Gradient Background: " + body.style.background + ";";

	// Set the color input values to match the background colors
	color1.value = color1.value;
	color2.value = color2.value;
}

// Add an event listener to run the setInitialBackground function once the page has loaded
window.onload = setInitialBackground;

// Function to generate a random color in hexadecimal format
function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// Function to set random colors for the color inputs
function setRandomColors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

// Add click event listener to the randomButton
randomButton.addEventListener("click", setRandomColors);
