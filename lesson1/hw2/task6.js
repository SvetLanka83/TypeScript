"use strict";
let strValue = prompt('enter number 1 0 -3');
if (strValue !== null) {
    let numValue = +strValue;
    if (numValue !== 0) {
        console.log('right');
    }
    else {
        console.log('wrong');
    }
}
