const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;

let positiveInteger;
let x = 1;
let y = 1;

do {
        positiveInteger = Number(readlineSync.question("\nPositive integer: "));
} while (positiveInteger > MAX
        || positiveInteger < MIN
        || Number.isNaN(positiveInteger)
        || Number.isInteger(positiveInteger) == false);

if ((positiveInteger === 1) || (positiveInteger === 2)) {
        console.log("1.");
} else {
        for (var i = 3; i <= positiveInteger; i++) {
                if (i % 2 != 0) {
                        x += Number(y);
                } else {
                        y += Number(x);
                }
        }

        if (positiveInteger % 2 == 1) {
                console.log("\n" + x.toLocaleString() + ".");
        } else {
                console.log("\n" + y.toLocaleString() + ".");
        }
}
