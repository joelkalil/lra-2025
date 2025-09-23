// -------------------------------------------------------
// This program calculates an employee's salary
// based on the number of hours worked and the hourly wage.
//
// Formula:
//   salary = hoursWorked * hourlyWage
//
// The program input consists of 3 lines:
//   1st line → employee number
//   2nd line → number of hours worked
//   3rd line → hourly wage
//
// Example input:
//   25
//   100
//   5.50
//
// Example output:
//   NUMBER = 25
//   SALARY = U$ 550.00
// -------------------------------------------------------

// String simulating the program input.
// It has three lines separated by "\n":
//   "25"   → employee number
//   "100"  → hours worked
//   "5.50" → hourly wage
var input = "25\n100\n5.50";

// The split("\n") method splits the string at each line break.
// Result in this case: ["25", "100", "5.50"]
var lines = input.split("\n");

// Variables to store input values.
let employeeNumber;

let hoursWorked;

let hourlyWage;

// Convert the first line ("25") to integer.
// This value identifies the employee (their "number" or "ID").
employeeNumber = parseInt(lines[0]);

// Convert the second line ("100") to integer.
// This value represents the number of hours worked.
hoursWorked = parseInt(lines[1]);

// Convert the third line ("5.50") to float.
// We use parseFloat because the value may have decimals.
hourlyWage = parseFloat(lines[2]);

// Variable to store the calculated salary.
let salary;

// Salary calculation:
//   salary = hoursWorked * hourlyWage
salary = hoursWorked * hourlyWage;

// Output the employee number.
console.log("NUMBER = " + employeeNumber);

// Output the salary, formatted to two decimal places.
console.log("SALARY = U$ " + salary.toFixed(2));

// Alternative output using template strings.
console.log(`NUMBER = ${employeeNumber}`);

console.log(`SALARY = U$ ${salary.toFixed(2)}`);
