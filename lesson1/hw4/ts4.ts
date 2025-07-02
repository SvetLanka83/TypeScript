//@ts-ignore
function square (aNum:number, bNum:number): number {
    return aNum * bNum;

}
square(100, 200)

function roundSquare (radius: number): number {
    return Math.PI * radius * radius;

}
console.log(roundSquare(5));

function squareCilinder (radius: number, height: number): number {
    return 2 * Math.PI * radius * height;

}
console.log(squareCilinder (10,40) );


function foobar12 (array: any[]): void{
    for (const item of array){
        console.log(item)
    }
}

function foobarText (text: string): void{
    document.write(`<p>${text}</p>`)
}
foobarText(`octen`);


function foobarList (text: string): void {
    document.write(`
                  <ul>
                    <li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>
                  </ul>`)

}
foobarList (`hello octen`)

type Primitiv = boolean | string | number
function foobar45 (arrayOfPrimitivs: Primitiv[]): void{
    document.write(`<ul>`)


    for (const item of arrayOfPrimitivs) {
        document.write(`<li>${item}</li>`)

    }
    document.write(`</ul>`)
}
foobar45([165,88,88,'vjjbk',true]);

type User49 = {id:number, name: string, age: number}
function foobar (users: User49[]): void{
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)

    }
}
foobar([
    {id:1, name: 'kokos', age: 45},
    {id:2, name: 'kokos', age: 45},
    {id:3, name: 'kokos', age: 45},
    {id:4, name: 'kokos', age: 45},
    {id:5, name: 'kokos', age: 45}
])

function arrayMinValue(numbers: number[]): number {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }

    }

    return min;
}

console.log(arrayMinValue([5, 54, 687, -45, 54]));

function sum(arr: number[]): number{
    let basket = 0;
    for (const item of arr){
        basket = basket + item;
    }
    return basket;
}
console.log(sum([1,2,10]));

function swap(arr: number[], i1: number, i2: number): number[] | string | number {
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return -Infinity;
}
console.log(swap([11,22,33,44],0,1));

function exchange(sumUAH: number, currencyValues: {currency: string, value: number}[], exchangeCurrency:string) {
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency)
            chosenCurrency = item;

    }
    if (chosenCurrency) {
        return sumUAH / chosenCurrency.value;
    }
    return -1;
}
console.log(exchange(10000,[{currency:'USD',value:25}, {currency:'EUR',value:42}],'USD'))

