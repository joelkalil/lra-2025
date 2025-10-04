// Read input from text file
var input = require('fs').readFileSync('activity_3/data/1064_1.txt', 'utf8');

// Split input text in "\n"
var lines = input.split('\n');

// Defining variables
var positiveNumbersAmount = 0;

var positiveNumbersTotal = 0;

// Iterate over each input number
for(let i=0; i < lines.length; i++){

    // Parsing the number to float
    let currentNumber = parseFloat(lines[i]);

    // If the number is positive
    if(currentNumber >= 0){

        // Increment the amount of positive numbers
        positiveNumbersAmount++;

        // Add the number to the total sum
        positiveNumbersTotal += currentNumber;

    }

}

// Calculating the average
var averagePositiveNumbers = positiveNumbersTotal / positiveNumbersAmount;

// Printing the answer
console.log(`${positiveNumbersAmount} valores positivos`)

console.log(averagePositiveNumbers.toFixed(1));