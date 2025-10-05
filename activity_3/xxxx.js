// Read input from text file
var input = require('fs').readFileSync('activity_3/data/xxxx_1.txt', 'utf8');

// Split input text in "\n"
var lines = input.split('\n');

// Defining the range limits
const lowerRange = 10;

const upperRange = 20;

// Parsing the amount of numbers
var amountOfNumbers = parseInt(lines[0]);

// Defining the count of numbers in the range
var inCount = 0;

// Iterating through all numbers
for(let i = 0; i < amountOfNumbers; i++){

    // Parsing the current number
    let currentlyNumber = parseInt(lines[i]);

    // Checking if the number is in the range
    if(currentlyNumber <= upperRange && currentlyNumber >= lowerRange){

        inCount++;

    }

}

// Printing the results
console.log(`${inCount} in`);

console.log(`${amountOfNumbers - inCount} out`);
