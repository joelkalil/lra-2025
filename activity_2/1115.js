// Read input from text file
var input = require('fs').readFileSync('activity_2/data/1115_1.txt', 'utf8');

// Split input text in "\n"
var lines = input.split('\n');

// Looping to iterate in each tuple (x, y)
for(idx in lines){

    // Get values from tuple
    let values = lines[idx].split(" ");


    // Defining x and y
    let x;

    let y;

    // Checking if x and y isn't null
    if(values[0] != "" && values[1] != ""){

        // Parsing x and y to integer
        x = parseInt(values[0]);

        y = parseInt(values[1]);

        // Searching the quadrant
        if(x > 0) {

            if(y > 0) {

                console.log("primeiro");

            } else {

                console.log("quarto");
            }

        } else {

            if(y > 0) {

                console.log("segundo");

            } else {

                console.log("terceiro");
            }

        }

    } else {

        break;

    }
    
}