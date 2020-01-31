const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let total = 0;
let x = 1;
let average = 0;
let nonNegativeInteger;

do {
        nonNegativeInteger = Number(readlineSync.question("\nNon-negative integer: "));

        if (x === 1 && (nonNegativeInteger < MIN)) {
                nonNegativeInteger = 0;
        } else if (x === 1 && (nonNegativeInteger > MAX)) {
                nonNegativeInteger = 0;
        } else if (nonNegativeInteger >= MIN
                && nonNegativeInteger <= MAX
                && Number.isNaN(nonNegativeInteger) == false
                && Number.isInteger(nonNegativeInteger)) {
                total = Number(Number(total) + Number(nonNegativeInteger));
                x = Number(x + 1);
        } else if (x > 1 && nonNegativeInteger < MIN) {
                nonNegativeInteger = -1;
        } else if (x > 1 && nonNegativeInteger > MAX) {
                nonNegativeInteger = 0;
        }
} while (((nonNegativeInteger <= MAX) && (nonNegativeInteger >= MIN))
        || Number.isNaN(nonNegativeInteger) == true
        || Number.isInteger(nonNegativeInteger) == false)

average = Number(total / x);
average = Number(average * 1000);
average = Math.floor(average);
average = Number(average / 1000);
average = average + "";

console.log("\n" + average.toLocaleString() + ".");
