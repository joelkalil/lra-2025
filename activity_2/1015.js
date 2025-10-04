// Read input from text file
var input = require('fs').readFileSync('activity_2/data/1015_3.txt', 'utf8');

// Split input text in "\n"
var lines = input.split('\n');

// Parsing values from p1(x1, y1)
let valuesP1 = lines[0].split(" ");

let xP1 = parseFloat(valuesP1[0]);

let yP1 = parseFloat(valuesP1[1]);

// Parsing values from p2(x2, y2)
let valuesP2 = lines[1].split(" ");

let xP2 = parseFloat(valuesP2[0]);

let yP2 = parseFloat(valuesP2[1]);

// Calculating distance
let distance = (((xP2 - xP1) ** 2) + ((yP2 - yP1) ** 2)) ** 0.5;

console.log(`${distance.toFixed(4)}`);