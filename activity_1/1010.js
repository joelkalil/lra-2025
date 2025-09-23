// -------------------------------------------------------
// This program calculates the total amount to pay for two items.
// Each item has three pieces of information:
//   - item code (an identifier number)
//   - quantity purchased
//   - unit price
//
// Formula for each item:
//   value = quantity * unitPrice
//
// Total formula:
//   total = valueOfItem1 + valueOfItem2
//
// Example input:
//   12 1 5.30
//   16 2 5.10
//
// Means:
//   Item 1 → code 12, quantity 1, unit price 5.30
//   Item 2 → code 16, quantity 2, unit price 5.10
//
// Expected output:
//   TOTAL AMOUNT: $ 15.50
// -------------------------------------------------------

// String simulating the program input.
// Each line represents a different item, separated by "\n".
var input = "12 1 5.30\n16 2 5.10";

// The split("\n") method divides the text into parts
// each time it finds a line break.
// Result: ["12 1 5.30", "16 2 5.10"]
var lines = input.split("\n");

// Variables to store information for the first item.
let item1Info;

let item1Code;

let item1Quantity;

let item1UnitPrice;

// Variables to store information for the second item.
let item2Info;

let item2Code;

let item2Quantity;

let item2UnitPrice;

// Get the first line ("12 1 5.30") and split by spaces.
// Result: ["12", "1", "5.30"]
item1Info = lines[0].split(' ');

// Convert each piece of information:
// Item 1 code → integer (12)
item1Code = parseInt(item1Info[0]);

// Item 1 quantity → integer (1)
item1Quantity = parseInt(item1Info[1]);

// Item 1 unit price → float (5.30)
item1UnitPrice = parseFloat(item1Info[2]);

// Get the second line ("16 2 5.10") and split by spaces.
// Result: ["16", "2", "5.10"]
item2Info = lines[1].split(' ');

// Convert each piece of information:
// Item 2 code → integer (16)
item2Code = parseInt(item2Info[0]);

// Item 2 quantity → integer (2)
item2Quantity = parseInt(item2Info[1]);

// Item 2 unit price → float (5.10)
item2UnitPrice = parseFloat(item2Info[2]);

// Variable to store the final total amount.
let total;

// Calculate the total amount to pay:
//   (quantity of item 1 * unit price of item 1)
// + (quantity of item 2 * unit price of item 2)
//
// Using the example values:
//   (1 * 5.30) + (2 * 5.10)
//   5.30 + 10.20 = 15.50
total = (item1Quantity * item1UnitPrice) + (item2Quantity * item2UnitPrice);

// Display the total amount to pay in the console.
// The toFixed(2) method ensures the number always has 2 decimal places.
console.log("TOTAL AMOUNT: $ " + total.toFixed(2));

// Another way to write the same output is using template strings (`...`),
// which allow variables directly inside the text with ${}.
console.log(`TOTAL AMOUNT: $ ${total.toFixed(2)}`);
