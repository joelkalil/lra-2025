// Read input from .txt
var input = require('fs').readFileSync("T3-U1/data/q4.txt", 'utf-8');

// Splitting lines in input
var lines = input.split("\n");

// Declarating the grade threshold
const gradeThreshold = 4.0;

// Converting the test results to float and allocating in a variable
let av1 = parseFloat(lines[0]);

let av2 = parseFloat(lines[1]);

// Calculating the partial grade
let partialGrade = (av1 + av2) / 2;

// Apply condition 1
if(partialGrade < gradeThreshold){

    // Print the failed message
    console.log("You failed!");    

// Then, keep going to finals
} else {

    // Printing partial grade result
    console.log(`Almost there, your partial grade is ${partialGrade}!`);

    // To garantee AV3 will exist, I define it here
    let av3 = parseFloat(lines[2]);

    // Calculating the final grade
    let finalGrade = (partialGrade + av3) / 2;

    // Apply condition 2
    if(finalGrade < gradeThreshold) {

        // Print the failed message
        console.log("You failed!");
    
    // Then, print succedd message
    } else {

        // Printing final grade
        console.log(`Congratulations! You have been approved with ${finalGrade}!`);

    }

};

