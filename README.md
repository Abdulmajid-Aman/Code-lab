# TITTLE: WEEK 1 CODE LAB CHALLENGES

# DESCRIPTION: THIS REPOSITORY CONTAINS THE SOLUTIONS FOR THE CODE LAB CHALLENGES

# CHALLENGE 1:

 Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

# Student Grading System
This web application provides a simple way to calculate and display student grades based on user input. The grading is determined using a standard grading scale.

# Features

Dynamic Grading: Grades are calculated and displayed immediately as the user inputs a grade.
Standard Grading Scale: Grades are determined based on the following ranges:

A: Above 79

B: 60 to 79

C: 50 to 60

D: 41 to 49

E: 40 or below

# Files

1. index.html: Contains the HTML structure for the application.
2. styles.css: Contains the CSS styles for the application.
3. app.js: Contains the JavaScript code for the grading logic.

# Requirements

A modern web browser to run the application.
Basic knowledge of HTML, CSS, and JavaScript.

# Usage

1. Open the Application: Open index.html in a web browser.
2. Input Grade: Enter the grade into the input field.
3. View Grade: The corresponding letter grade will be displayed immediately.

# How to Extend

1. Custom Grading Scales: Modify the grading ranges in the studentGradeGenerator function to match different grading standards.
2. Additional Feedback: Include more detailed feedback or suggestions based on the grade.
3. UI Improvements: Enhance the UI with more sophisticated styles or additional interactive elements.

# License

This project is open source and available under the MIT License.




# CHALLENGE 2

  Write a program that takes the speed of a car as input e.g: 80. If the speed is less than 70, it should print “Ok." Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

 # Speed Demerit Points Calculator

This project calculates and displays demerit points based on the speed entered by a user. If the speed exceeds the set speed limit, demerit points are awarded according to the speed difference. If the speed exceeds the limit by a large margin, the license is marked as suspended.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Files](#files)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)

## Features

- Calculates demerit points based on the speed entered by the user.
- Displays the status (`"Ok"` if within the limit, `"Point: x"` for slight violations, or `"License suspended"` for severe violations).
- Updates the result in real-time as the user inputs the speed.



# Speed Demerit Points Calculator

This project calculates and displays demerit points based on the speed entered by a user. If the speed exceeds the set speed limit, demerit points are awarded according to the speed difference. If the speed exceeds the limit by a large margin, the license is marked as suspended.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Files](#files)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)

## Features

- Calculates demerit points based on the speed entered by the user.
- Displays the status (`"Ok"` if within the limit, `"Point: x"` for slight violations, or `"License suspended"` for severe violations).
- Updates the result in real-time as the user inputs the speed.

## Setup


# Open the Project:

Open the index.html file in your web browser to use the calculator.

# Usage
Enter Speed: Input the speed in the designated field.
View Results: The display will automatically show the demerit points or the suspension status.
# Example
Enter 70 to see "Ok".

Enter 75 to see "Point: 1".

Enter 130 to see "License suspended".

# Files
1. index.html: The main HTML file with input and output fields.
2. script.js: Contains the JavaScript logic to calculate demerit points.
3. style.css (optional): Contains any custom styles for the project.

# How It Works

The user inputs a speed in the number-el input field.
The pointsGenerator function calculates the difference between the entered speed and the speed limit.
Based on the speed difference, the function updates the display-el element with the appropriate message.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

# License

This project is licensed under the MIT License - see the LICENSE file for details.


# CHALLENGE 3


Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

- https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.
- 
- www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

# Net Salary Calculator
This web application calculates the net salary of an employee after deductions including NHIF, NSSF, and PAYE. It takes the basic salary and benefits as input and provides the net salary as output.

# Features
1. Real-time Calculation: Calculates the net salary based on user inputs for basic salary and benefits.
2. Deductions: Includes deductions for NSSF (using Tier 1 rates), NHIF, and PAYE.
3. User-friendly: Easy-to-use interface for calculating net salary with immediate feedback.

# Files

1. index.html: Contains the HTML structure for the application.
2. styles.css: Contains the CSS styles for the application.
3. app.js: Contains the JavaScript code for the salary calculation logic.

# Requirements

A modern web browser to run the application.
Basic knowledge of HTML, CSS, and JavaScript.

# Usage

1. Open the Application: Open index.html in a web browser.
Input Data:
2. Enter the Basic Salary in the input field labeled "Basic Salary".
3. Enter the Benefits in the input field labeled "Benefits".
4. Calculate: Click the Calculate button to compute the net salary.
5. View Result: The net salary will be displayed below the input fields.

# How to Extend
1. Advanced NSSF Calculations: Add more sophisticated calculations for NSSF contributions based on different rates and income bands.
2. Customizable Deductions: Allow users to input custom deduction rates or additional deductions.
3. Detailed Breakdown: Provide a detailed breakdown of all deductions in the output.

# License

This project is open-source and available under the MIT License.

# LIVE LINK
Link https://github.com/Abdulmajid-Aman/Code-lab



# Project by:
 - Abdulmajid Aman Hussein
