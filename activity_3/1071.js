// Read input from text file
var input = require('fs').readFileSync('activity_3/data/1071_3.txt', 'utf8');

// Split input text in "\n"
var lines = input.split('\n');

// Parsing inputs to integer
var inputX = parseInt(lines[0]);

var inputY = parseInt(lines[1]);

// Checking if X and Y inputs are equal
if(inputX == inputY){

    // If yes, just return 0
    console.log(0);

}else{

    // Getting start and end integers
    var startIdx = Math.min(inputX, inputY) + 1;

    var endIdx = Math.max(inputX, inputY);

    // Defining the sum as 0
    var sum = 0;

    // Iterating untill startIdx reach endIdx
    while(startIdx != endIdx){

        // If the currently number is odd
        if(startIdx % 2 != 0){

            sum += startIdx;

        }

        // Increment the number
        startIdx++;

    }

    // Printing the sum
    console.log(sum);

}
