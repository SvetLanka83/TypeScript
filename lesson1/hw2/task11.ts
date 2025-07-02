let jnum: string | null = prompt("Введіть 0");
let j: number;

if (jnum !== null) {
    j = Number(jnum);
    if (!j) {
        j = 0;
    }
} else {
    j = 0;
}

console.log(j);
