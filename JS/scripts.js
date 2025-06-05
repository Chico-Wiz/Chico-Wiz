// Select the button element
const myButton = document.getElementById("myButton");

// Function to toggle button text
function toggleButtonText() {
    myButton.innerText = myButton.innerText === "Click me!" ? "Clicked!" : "Click me!";
}

// Add click event listener to the button
myButton.addEventListener("click", toggleButtonText);