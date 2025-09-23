// Read input from text file
var input = require('fs').readFileSync('activity_2/data/1035_1.txt', 'utf8');

// Split input text in "\n"
var lines = input.split('\n');

// Isolating values
let values = lines[0].split(" ");

let A = values[0];

let B = values[1];

let C = values[2];

let D = values[3];

// Parsing to integer
A = parseInt(A);

B = parseInt(B);

C = parseInt(C);

D = parseInt(D);

// Checking conditions
let condition1 = (B > C);

let condition2 = (D > A);

let condition3 = ((C + D) > (A + B));

let condition4 = (C >= 0 && D >= 0);

let condition5 = (A % 2 == 0);

// Apply conditions
if (condition1 && condition2 && condition3 && condition4 && condition5) {

    console.log("Valores aceitos");

} else {

    console.log("Valores nao aceitos");

}