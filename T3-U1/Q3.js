// Read input from .txt
var input = require('fs').readFileSync("T3-U1/data/q3.txt", 'utf-8');

// Set a const for the minimum age to get the license
const minimumAgeToGetLicense = 18;

// Age of the person
let age = parseInt(input);

// Apply condition 1
if(age >= minimumAgeToGetLicense){

    // Print the OK! message
    console.log("Yes, he is ready to get the license!");

// Then, apply condition 2
} else {

    // Calculating the delta age to be ready
    let deltaAgeToBeReady = minimumAgeToGetLicense - age;

    // Print the necessary amount of years to be ready
    console.log(`No, he need to wait more ${deltaAgeToBeReady} years!`);

}