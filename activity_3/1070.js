// Read input from text file
var input = require('fs').readFileSync('activity_3/data/1070_1.txt', 'utf8');

// Split input text in "\n"
var lines = input.split('\n');

// Parsing input to integer
var inputInteger = parseInt(lines[0]);

// Define the counter of numbers to print
var counter = 6;

// Defining the variable to increment
var currentlyInteger = inputInteger;

// Starting looping
while(counter > 0){

    // If the number is odd
    if(currentlyInteger % 2 != 0){

        // Printing the integer
        console.log(currentlyInteger);

        // Decrementing the counter
        counter--;

    }

    // Going to the next integer
    currentlyInteger++;

}