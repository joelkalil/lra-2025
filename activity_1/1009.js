// -------------------------------------------------------
// This program calculates the final salary of a salesperson.
// The final salary consists of two parts:
//   - a fixed base salary
//   - a 15% commission on the total monthly sales
//
// Formula:
//   totalSalary = baseSalary + (commissionRate * totalSales)
//
// The program input consists of 3 lines:
//   1st line → salesperson's name
//   2nd line → base salary
//   3rd line → total sales for the month (in money)
//
// Example input:
//   JOAO
//   500.00
//   1230.30
//
// Example output:
//   TOTAL = R$ 684.55
// -------------------------------------------------------

// String simulating the program input.
// It has three lines separated by "\n":
//   "JOAO"    → salesperson's name
//   "500.00"  → base salary
//   "1230.30" → total sales for the month
var input = "JOAO\n500.00\n1230.30";

// The split("\n") method splits the string into parts
// whenever it finds a line break (\n).
// Result in this case: ["JOAO", "500.00", "1230.30"]
var lines = input.split("\n");

// Define the fixed commission rate of 15% (0.15 as a decimal).
const commissionRate = 0.15;

// Variables to store the input values.
let salespersonName;

let baseSalary;

let totalSales;

// The first line is just text, so no conversion needed.
salespersonName = lines[0];

// The second line is the base salary.
// Use parseFloat to convert the text to a decimal number.
baseSalary = parseFloat(lines[1]);

// The third line is the total sales for the month.
// Also use parseFloat to handle decimal numbers.
totalSales = parseFloat(lines[2]);

// Variable to store the final salary.
let totalSalary;

// Calculate the final salary:
//   base salary + (15% of total sales)
totalSalary = baseSalary + (commissionRate * totalSales);

// Display the final salary in the console.
// Use toFixed(2) to always show two decimal places.
console.log("TOTAL = R$ " + totalSalary.toFixed(2));

// Another way to write the same thing is using template strings (`...`),
// which allow variables to be inserted directly into the text with ${}.
console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);
