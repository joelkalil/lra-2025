// Read input from .txt
var input = require('fs').readFileSync("T3-U1/data/q2.txt", 'utf-8');

// Set a const for the limit salary for 20% raise
const limitSalary = 500;

// Set a const for the 1° value of raise
const raiseBeforeLimit = 0.20;

// Set a const for the 2°value of raise
const raiseAfterLimit = 0.10;

// Convert salary to float type
let originalSalary = parseFloat(input);

// Creating variable to receive the new salary value
let newSalary;

// Apply condition 1
if(originalSalary <= limitSalary){

    // Calculating new salary
    newSalary = originalSalary * (1 + raiseBeforeLimit);

// Then, apply condition 2
} else {

    // Calculating new salary
    newSalary = originalSalary * (1 + raiseAfterLimit);

}

// Printing the new salary value
console.log(`New salary value is ${newSalary}`);
