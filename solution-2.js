// Accessing the HTML elements
let numberEl = document.getElementById("number-el")
let displayEl = document.getElementById("display-el")

// Speed limit
const speedLimit = 70

// Function to calculate the demerit points
function pointsGenerator() {
// Accesing user input
let speed = numberEl.value

// Calculating the speed difference
let speedDiff = speed - speedLimit

// Conditonal statement
if (speedDiff === 0) {
    displayEl.textContent = "Ok"
} else if(speedDiff <= 5) {
    displayEl.textContent = "Point:" + "1"
} else if (speedDiff <= 10) {
    displayEl.textContent = "Points:" + "2"
} else if (speedDiff <= 15) {
     displayEl.textContent = "Points:" + "3"
} else if (speedDiff <= 20) {
     displayEl.textContent = "Points:" + "4"
} else if (speedDiff <= 25) {
     displayEl.textContent = "Points:" + "5"
} else if (speedDiff <= 30) {
     displayEl.textContent = "Points:" + "6"
} else if (speedDiff <= 35) {
     displayEl.textContent = "Points:" + "7"
} else if (speedDiff <= 40) {
     displayEl.textContent = "Points:" + "8"
} else if (speedDiff <= 45) {
     displayEl.textContent = "Points:" + "9"
} else if (speedDiff <= 50) {
     displayEl.textContent = "Points:" + "10"
} else if (speedDiff <= 55) {
     displayEl.textContent = "Points:" + "11"
} else if (speedDiff <= 60) {
     displayEl.textContent = "Points:" + "12"
}  else {
     displayEl.textContent = "Lincese suspended"
}
}

// Call the function when the user inputs a value
numberEl.addEventListener("input", pointsGenerator)     
