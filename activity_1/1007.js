// -------------------------------------------------------
// This program reads four integers,
// calculates the difference between the product of the first two
// and the product of the last two, and shows the result.
//
// Formula:
//   DIFFERENCE = (num1 * num2) - (num3 * num4)
//
// Example input:
//   5
//   6
//   7
//   8
// Example output:
//   DIFFERENCE = -26
// -------------------------------------------------------

// Here we have a string that simulates the input data.
// It has four lines, separated by "\n":
//   "5" (first number)
//   "6" (second number)
//   "7" (third number)
//   "8" (fourth number)
var input = "5\n6\n7\n8";

// The split("\n") method splits this text into several parts,
// whenever it finds a line break (\n).
// Result: ["5", "6", "7", "8"]
var lines = input.split("\n");

// We create four variables to store the input numbers.
let num1;

let num2;

let num3;

let num4;

// Get the first value from the "lines" list ("5"),
// and convert the text to an integer using parseInt.
// Now "num1" is 5.
num1 = parseInt(lines[0]);

// Get the second value ("6"),
// and also convert to integer.
// Now "num2" is 6.
num2 = parseInt(lines[1]);

// Get the third value ("7"),
// and convert to integer.
// Now "num3" is 7.
num3 = parseInt(lines[2]);

// Get the fourth value ("8"),
// and convert to integer.
// Now "num4" is 8.
num4 = parseInt(lines[3]);

// Create a variable called "difference"
// to store the result of the calculation.
let difference;

// Calculate the difference between the products.
// Formula: (num1 * num2) - (num3 * num4)
//
// Substituting the values:
//   (5 * 6) - (7 * 8)
//   30 - 56
//   = -26
difference = (num1 * num2 - num3 * num4);

// Display the result in the console.
// Here we use concatenation ("text" + value).
console.log("DIFFERENCE = " + difference);

// Another way is using template string (`...`),
// where we put the variable directly in the text.
console.log(`DIFFERENCE = ${difference}`);
