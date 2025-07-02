"use strict";
let jnum = prompt("Введіть 0");
let j;
if (jnum !== null) {
    j = Number(jnum);
    if (!j) {
        j = 0;
    }
}
else {
    j = 0;
}
console.log(j);
