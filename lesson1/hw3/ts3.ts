for (let i = 0; i < 10; i++) {
    document.write('<div>okten is cool</div>')
}

for (let i = 0; i < 10; i++) {
    document.write(`<div>okten is cool ${i}</div>`)
}

let i: number = 0;
while (i < 20) {
    document.write('<h1>okten is cool</h1>')
    i++;
}

let a: number = 0;
while (a < 20) {
    document.write(`<h1>okten is cool ${a}</h1>`)
    a++;
}

document.write(`<ul>`)
let listOfItems: string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (const item of listOfItems) {
    document.write(`<li>${item}</li>`)
}
document.write(`</ul>`)
type ProductType = {
    title:string,
    price:number,
    image: string
};

let products: ProductType[] = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write(` <div class="product-card">
         <h3 class="product-title">${product.title}. price - ${product.price}</h3>
         <img src="${product.image}" alt="" class="product-image">
     </div>`)
}
type UserType = {name:string, age:number, status:boolean}
//@ts-ignore
let users: UserType[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (const user of users) {
    if (user.status) {
        console.log(user);
    }

}
for (const user of users) {
    if (!user.status) {
        console.log(user);
    }

}
for ( let user of users ) {
    if (user.age > 30) {
        console.log(user);
    }
}
