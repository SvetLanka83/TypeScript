"use strict";
let dayNumber = prompt("Введи номер дня тижня (1-7):");
if (dayNumber !== null) {
    let day = +dayNumber;
    switch (dayNumber) {
        case "1":
            console.log("Monday");
            console.log("Monday");
            console.log("Monday");
            break;
        case "2":
            console.log("Tuesday");
            console.log("Tuesday");
            console.log("Tuesday");
            break;
        case "3":
            console.log("Wednesday");
            console.log("Wednesday");
            console.log("Wednesday");
            break;
        case "4":
            console.log("Thursday");
            console.log("Thursday");
            console.log("Thursday");
            break;
        case "5":
            console.log("Friday");
            console.log("Friday");
            console.log("Friday");
            break;
        case "6":
            console.log("Saturday");
            console.log("Saturday");
            console.log("Saturday");
            break;
        case "7":
            console.log("Sunday");
            console.log("Sunday");
            console.log("Sunday");
            break;
        default:
            console.log("Неправильний номер дня.");
    }
}
