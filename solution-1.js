// Access the user input to grade it
let gradeEl = document.getElementById("grade-el")

// The output
let answerEl = document.getElementById("answer-el")

// Student grading system
function studentGradeGenerator() {
 // Accessing the user input
let grade = gradeEl.value

 // Conditional statement for grading
    if(grade> 79) {
        answerEl.textContent = "You have:" + "A"
    } else if (grade> 60) {
        answerEl.textContent ="You have:" + "B"
    } else if (grade> 49 ) {
        answerEl.textContent = "You have:" + "C"
    } else if (grade> 40) {
        answerEl.textContent = "You have:" + "D"
    } else {
        answerEl.textContent = "You have:"  + "E"
    }
} 


// Call the function when the user inputs a value
gradeEl.addEventListener("input", studentGradeGenerator)