// Read input from text file
var input = require('fs').readFileSync('AV1/data/q1.txt', 'utf8');

// Split input text in "\n"
var lines = input.split('\n');

// Define pi constant
const pi = 3.14159;

// Convert input to integer
let radius = parseInt(lines[0]);

// Calculate volume
let volume = (4/3) * pi * (radius ** 3);

// Print the message and value
console.log(`VOLUME = ${volume.toFixed(3)}`);