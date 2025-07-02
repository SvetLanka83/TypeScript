type Autor = {name:string, age:number};
type Book_1 = {
    title:string,
    pageCount:number,
    genre:string,
    authors: Autor []
};

let book4:Book_1 = {title: 'qwe', pageCount: 1500, genre: 'geag', authors:[
        {name: 'olga',age: 25},
        {name: 'petya',age: 38}]
};
console.log(book4);
let book5:Book_1 ={title: 'uyf', pageCount: 1000, genre: 'td', authors:[
        {name: 'irina',age: 22},
        {name: 'oleg',age: 40}]
};
console.log(book5);
let book6: Book_1 ={title: 'dzjh', pageCount: 1500, genre: 'fsht', authors:[
        {name: 'vitya',age: 35},
        {name: 'vova',age: 28}]
};
console.log(book6);
