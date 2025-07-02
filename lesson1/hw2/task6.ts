let strValue: string | null = prompt('enter number 1 0 -3');
if (strValue !== null) {
    let numValue: number = +strValue;
    if (numValue !== 0) {
        console.log('right');
    } else {
        console.log('wrong');
    }
}
