// -------------------------------------------------------
// This program calculates the area of a circle given its radius
// Formula for the area of a circle: A = π * r²
// Where:
//   π (pi) = mathematical constant (~3.14159)
//   r = radius of the circle
// -------------------------------------------------------

// Sample input for testing purposes
var input = "150.00";

// Split the input into lines (simulating reading from standard input)
var lines = input.split("\n");

// Define the value of pi
const pi = 3.14159;

// Declare a variable to hold the radius
let raio;

// Read the radius from the input and convert it to a floating-point number
raio = parseFloat(lines[0]);

// Declare a variable to hold the area
let area;

// Calculate the area using the formula A = π * r²
area = pi * (raio ** 2);

// Print the area to the console, formatted to four decimal places
console.log("A=" + area.toFixed(4))

// Alternative way to print the area using template literals
console.log(`A=${area.toFixed(4)}`)
