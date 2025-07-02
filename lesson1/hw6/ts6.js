"use strict";
let s1 = 'hello world';
console.log(s1.length);
let s2 = 'lorem ipsum';
console.log(s2.length);
let s3 = 'javascript is cool';
console.log(s3.length);
const strings = [s1, s2, s3];
for (const s of strings) {
    console.log(s.length);
}
let hel = 'hello world';
const h = hel.toUpperCase();
console.log(h);
let lor = 'lorem ipsum';
const l = lor.toUpperCase();
console.log(l);
let jav = 'javascript is cool';
//@ts-ignore
const j = jav.toUpperCase();
console.log(j);
let helo = 'HELLO WORLD';
const he = helo.toLowerCase();
console.log(he);
let lore = 'LOREM IPSUM';
const lo = lore.toLowerCase();
console.log(lo);
let java = 'JAVASCRIPT IS COOL';
const ja = java.toLowerCase();
console.log(ja);
let str = ' dirty string   ';
const d = str.trim();
console.log(d);
function stringToarray(str1) {
    if (str1) {
        const split = str1.split(' ');
        return split;
    }
    return [''];
}
console.log(stringToarray('Ревуть воли як ясла повні'));
const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const stringsmap = numbers.map(number => number + '');
console.log(stringsmap);
function sortNums(array, direction) {
    if (direction === 'asc')
        return array.sort((a, b) => a - b);
    if (direction === 'desc')
        return array.sort((a, b) => b - a);
    return array;
}
let nums = [11, 21, 3];
console.log(sortNums(nums, 'asc'));
console.log(sortNums(nums, 'desc'));
//@ts-ignore
const coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
const map1 = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => (Object.assign(Object.assign({}, value), { id: index + 1 })));
console.log(map1);
//@ts-ignore
let coursesArray = [
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
}));
console.log(coursesArray.filter(course => {
    return course.modules.includes('docker');
}));
const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = { cardSuit: suit, value: value, color: (suit === 'heart' || suit === 'diamond') ? 'red' : 'black' };
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
console.log(cards.filter(card => card.cardSuit === 'club' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)));
const reduce = cards.reduce((accum, card) => {
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
