// Read input from text file
var input = require('fs').readFileSync('activity_2/data/1018_2.txt', 'utf8');

// Split input text in "\n"
var lines = input.split('\n');

// Defining the bank notes available
const bankNotes = [100, 50, 20, 10, 5, 2, 1];

// Parsing value to integer
var value = parseInt(lines[0]);

// Variable to do the subtractions
let actualValue = value;

// Printing the initial value
console.log(actualValue);

// Iterate over each note in bankNotes
for(idx in bankNotes) {

    // Assistants variables
    let actualNote = bankNotes[idx];

    let countNotes = 0;

    // Get the integer of the division
    countNotes = parseInt(actualValue / actualNote);

    // Calculating the rest amount of money
    actualValue = actualValue - (countNotes * actualNote);

    // Print the amount of notes
    console.log(`${countNotes} nota(s) de R$ ${actualNote},00`);

}