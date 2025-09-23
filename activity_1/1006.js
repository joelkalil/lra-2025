// -------------------------------------------------------
// This program reads three grades (decimal values),
// calculates their weighted average, and displays the result.
//
// What is a "weighted average"?
//   - Each grade has a different weight (importance).
//   - In this case:
//       Grade A has weight 2
//       Grade B has weight 3
//       Grade C has weight 5
//   - Weighted average formula:
//       average = (A * weightA + B * weightB + C * weightC) / (weightA + weightB + weightC)
//
// Example input:
//   5.0
//   6.0
//   7.0
// Example output:
//   AVERAGE = 6.3
// -------------------------------------------------------

var input = "5.0\n6.0\n7.0";

var lines = input.split("\n");

const weightA = 2;

const weightB = 3;

const weightC = 5;

let gradeA = parseFloat(lines[0]);

let gradeB = parseFloat(lines[1]);

let gradeC = parseFloat(lines[2]);

let average = ((gradeA * weightA) + (gradeB * weightB) + (gradeC * weightC)) / (weightA + weightB + weightC);

console.log("AVERAGE = " + average.toFixed(1));

console.log(`AVERAGE = ${average.toFixed(1)}`);
