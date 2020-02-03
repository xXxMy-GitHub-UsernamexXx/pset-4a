const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let nonNegativeInteger;

do {
        nonNegativeInteger = Number(readlineSync.question("\nNon-negative integer: "));
} while (nonNegativeInteger > MAX
        || nonNegativeInteger < MIN
        || Number.isNaN(nonNegativeInteger) == true
        || Number.isInteger(nonNegativeInteger) == false);

if ((nonNegativeInteger == 0) || (nonNegativeInteger == 1)) {
        console.log("\nNot prime.");
} else if (nonNegativeInteger == 2) {
        console.log("\nPrime.");
} else {
        for (var i = 2; i < nonNegativeInteger; i++) {
                if (Number.isInteger(nonNegativeInteger / i) == true) {
                        console.log("\nNot prime.");
                        break;
                } else if ((Number.isInteger(nonNegativeInteger / i) == false) && (Number(i) + 1 == nonNegativeInteger)) {
                        console.log("\nPrime.");
                }
        }
}
