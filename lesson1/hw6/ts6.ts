let s1:string ='hello world';
console.log(s1.length);
let s2:string = 'lorem ipsum';
console.log(s2.length);
let s3:string ='javascript is cool';
console.log(s3.length);

const strings:string[] = [s1, s2, s3];
for (const s of strings) {
    console.log(s.length);

}


let hel:string = 'hello world';
const h:string = hel.toUpperCase();
console.log(h);
let lor:string = 'lorem ipsum';
const l:string = lor.toUpperCase();
console.log(l);
let jav: string = 'javascript is cool';
//@ts-ignore
const j:string = jav.toUpperCase();
console.log(j);


let helo:string = 'HELLO WORLD';
const he:string = helo.toLowerCase();
console.log(he);
let lore:string = 'LOREM IPSUM';
const lo:string = lore.toLowerCase();
console.log(lo);
let java:string = 'JAVASCRIPT IS COOL';
const ja:string = java.toLowerCase();
console.log(ja);

let str:string = ' dirty string   '
const d:string = str.trim();
console.log(d);



function stringToarray(str1:string):string[] {
    if (str1){
        const split = str1.split(' ')
        return split;
    }
    return [''];
}
console.log(stringToarray('Ревуть воли як ясла повні'));


const numbers = [10,8,-7,55,987,-1011,0,1050,0];
const stringsmap:string[] = numbers.map(number => number + '');
console.log(stringsmap);





function sortNums(array: number[],direction: string): number[] {
    if (direction === 'asc') return array.sort((a,b) => a - b);
    if (direction === 'desc') return array.sort((a,b) => b - a);
    return array
}


let nums:number[] = [11, 21, 3];

console.log(sortNums(nums, 'asc'));
console.log(sortNums(nums, 'desc'));

//@ts-ignore
type Course = {title: string, monthDuration: number};
//@ts-ignore
const coursesAndDurationArray: Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const map1 = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => ({...value, id: index + 1}));
console.log(map1);



interface CourseData  {
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[];
}
//@ts-ignore
let coursesArray: CourseData [] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(course => {
    return course.modules.includes('sass');

} ));
console.log(coursesArray.filter(course => {
    return course.modules.includes('docker');

} ));


const suits: string [] = ['spade', 'diamond', 'heart', 'club'];
const values: string [] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

type Card = {cardSuit: string, value: string, color: string};
const cards: Card [] = [];
for (const suit of suits) {
    for (const value of values) {

        const card: Card = {cardSuit: suit, value: value, color: (suit === 'heart' || suit === 'diamond')?'red':'black'};

        cards.push(card);
    }
}

console.log(cards);

// - знайти піковий туз
console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
// - всі шістки
console.log(cards.filter(card => card.value === '6'));
// - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));

// - всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'));

// - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'club' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)
));

interface Accumulator {
    spades: Card [];
    diamonds: Card [];
    hearts: Card [];
    clubs: Card [];
}
const reduce = cards.reduce((accum: Accumulator, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;

    }


    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});


console.log(reduce);

