// Read input from text file
var input = require('fs').readFileSync('AV1/data/q2.txt', 'utf8');

// Split input text in "\n"
var lines = input.split('\n');

// Define pi constant
const pi = 3.14159;

// Convert input to float
let radius = parseFloat(lines[0]);

// Apply condition 1
if(radius > 0){

    // Calculate area
    let area = pi * (radius ** 2);

    // Print message
    console.log(`A=${area.toFixed(4)}`);

// Then, condition 2
} else {

    // Print message
    console.log("O raios deve ser positivo!");

}