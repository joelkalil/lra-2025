// -------------------------------------------------------
// This program reads two integers, sums them,
// and displays the result.
//
// Example:
//   Input: 30 and 10
//   Output: SOMA = 40
// -------------------------------------------------------

// Sample input for testing purposes
var input = "30\n10";

// Split the input into lines (simulating reading from standard input)
var lines = input.split("\n");

// Declare variables to hold the integers
let a;

let b;

// Read the integers from the input and convert them to integers
a = parseInt(lines[0]);

b = parseInt(lines[1]);

// Declare a variable to hold the sum
let soma;

// Calculate the sum of the two integers
soma = (a + b);

// Print the sum to the console in the specified format
console.log("SOMA = " + soma);

console.log(`SOMA = ${soma}`);
