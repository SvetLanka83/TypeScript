let number: string | null = prompt("Введи число");
if (number !== null ) {
    let day: number = +number;
    let a:number = 2;
    let b:number = 7;
    if (a > b) {
        console.log(a);
    } else if (a < b) {
        console.log(b);
    } else if (a === b) {
        console.log('===');
    }
}
