// Read input from text file
var input = require('fs').readFileSync('activity_2/data/1036_4.txt', 'utf8');

// Split input text in "\n"
var lines = input.split('\n');

// Isolating values
let values = lines[0].split(" ");

// Parsing values to float
let a0 = parseFloat(values[0]);

let a1 = parseFloat(values[1]);

let a2 = parseFloat(values[2]);

// Condition 1
if(a0 != 0){

    // Calculating delta
    let delta = (a1 ** 2) - 4 * a0 * a2;

    // Condition 2
    if(delta >= 0){
        
        // Calculating roots
        let r1 = (-a1 + (delta ** 0.5)) / (2 * a0);

        let r2 = (-a1 - (delta ** 0.5)) / (2 * a0);

        console.log(`R1 = ${r1.toFixed(5)}\nR2 = ${r2.toFixed(5)}`);

    } else {

        console.log("Impossivel calcular");

    }

} else {

    console.log("Impossivel calcular");

}
