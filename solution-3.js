// Accessing HTML elements
const salaryEl = document.getElementById("salary-el")
const benefitsEl = document.getElementById("benefits-el")
const netEl = document.getElementById("net-el")

// Accessing the btn
const calculateEl = document.getElementById("calculate-el")

// Declaring NHIF, NSSF, payee, basic salary, benefits
let payee = 0
let nssf = 0
let nhif = 0
let basicSalary = 0
let benefits = 0
let grossSalary = 0
let netSalary = 0
let totalDeductions = 0

// Calculating deductions

// calculating nssf
function calculateNSSF() {
  nssf = 7000 * 0.06
}

// payee function calculator
function payeeCalculator() {
  // Conditonal statements to determine the paye to be taxed on the salary
  if (grossSalary <= 24000) {
    payee = 0 // No tax for salaries below 24000
  } else if (grossSalary <= 32333) {
    payee = (32333 - 24000) * 0.1
  } else if (grossSalary <= 500000) {
    payee = (32333 - 24000) * 0.1 + (grossSalary - 32333) * 0.25
  } else if (grossSalary <= 800000) {
    payee = (32333 - 24000) * 0.1 + (500000 - 32333) * 0.25 + (grossSalary - 500000) * 0.3
  } else {
    payee =
      (32333 - 24000) * 0.1 +
      (500000 - 32333) * 0.25 +
      (800000 - 500000) * 0.3 +
      (grossSalary - 800000) * 0.35
  }
}

// Function that calculates nhif
function nhifCalculator() {
  // conditional statements for the rates of nhif
  if (grossSalary <= 5999) {
    nhif = 150
  } else if (grossSalary <= 7999) {
    nhif = 300
  } else if (grossSalary <= 11999) {
    nhif = 400
  } else if (grossSalary <= 14999) {
    nhif = 500
  } else if (grossSalary <= 19999) {
    nhif = 600
  } else if (grossSalary <= 24999) {
    nhif = 750
  } else if (grossSalary <= 29999) {
    nhif = 850
  } else if (grossSalary <= 34999) {
    nhif = 900
  } else if (grossSalary <= 39999) {
    nhif= 950
  } else if (grossSalary <= 44999) {
    nhif = 1000
  } else if (grossSalary <= 49999) {
    nhif = 1100
  } else if (grossSalary <= 59999) {
    nhif = 1200
  } else if (grossSalary <= 69999) {
    nhif = 1300
  } else if (grossSalary <= 79999) {
    nhif = 1400
  } else if (grossSalary <= 89999) {
    nhif = 1500
  } else if (grossSalary <= 99999) {
    nhif = 1600
  } else {
    nhif = 1700
  }
}

function calculateNetSalary() {
  // Accessing user input
  basicSalary = parseFloat(salaryEl.value)
  benefits = parseFloat(benefitsEl.value)

  // Calculating the gross salary
  grossSalary = basicSalary + benefits

  // Calculating nssf
  calculateNSSF()

  // Calculating payee
  payeeCalculator()

  // Calculating nhif
  nhifCalculator()

  // Calculating all deductions
  totalDeductions = nhif + nssf + payee

  // Calculating net pay
  netSalary = grossSalary - totalDeductions

  // Displaying net income
  netEl.textContent =" Net salary:" + netSalary.toFixed(2)
}

// Clicking the button while do all the sum and calculation
calculateEl.addEventListener("click", calculateNetSalary)