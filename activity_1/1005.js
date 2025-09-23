// -------------------------------------------------------
// This program reads two grades (decimal values),
// calculates their weighted average, and displays the result.
//
// What is a "weighted average"?
//   - Each grade has a "weight" indicating its importance.
//   - In this case:
//       Grade A has weight 3.5
//       Grade B has weight 7.5
//   - Weighted average formula:
//       average = (gradeA * weightA + gradeB * weightB) / (weightA + weightB)
//
// Example input:
//   5.0
//   7.1
// Example output:
//   MEDIA = 6.43182
// -------------------------------------------------------

// Input text for testing
var input = "5.0\n7.1";

// Split the text into parts whenever a newline is found
var lines = input.split("\n");

// Constant for the weight of the first grade (3.5)
const weightA = 3.5;

// Constant for the weight of the second grade (7.5)
const weightB = 7.5;

// Variable "a" to store the first grade
let a;

// Variable "b" to store the second grade
let b;

// Get the first value from the "lines" list (which is "5.0")
a = parseFloat(lines[0]);

b = parseFloat(lines[1]);

// Variable to store the calculated average
let average;

// Calculate the weighted average using the formula
average = ((a * weightA) + (b * weightB)) / (weightA + weightB);

// Print the average to the console, formatted to five decimal places
console.log("MEDIA = " + average.toFixed(5));

console.log(`MEDIA = ${average.toFixed(5)}`);
