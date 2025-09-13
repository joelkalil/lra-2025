// Read input from .txt
var input = require('fs').readFileSync("T3-U1/data/q1.txt", 'utf-8');

// Split multiple inputs lines
var lines = input.split("\n");

// Parse to float the 1° input
let a = parseFloat(lines[0]);

// Parse to float the 2° input
let b = parseFloat(lines[1]);

// Calculating the dividend
let dividend = parseInt(a / b);

// Calculating the reminder
let reminder = a % b;

// Print the answer
console.log(`Number A = ${a} and B = ${b}`);

console.log(`Then A/B has as dividend = ${dividend} and as reminder = ${reminder}`);
