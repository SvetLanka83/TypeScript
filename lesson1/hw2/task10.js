"use strict";
let number = prompt("Введи число");
if (number !== null) {
    let day = +number;
    let a = 2;
    let b = 7;
    if (a > b) {
        console.log(a);
    }
    else if (a < b) {
        console.log(b);
    }
    else if (a === b) {
        console.log('===');
    }
}
