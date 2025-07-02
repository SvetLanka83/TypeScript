"use strict";
//@ts-ignore
const coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
const coursesWithId = coursesAndDurationArray.map((course, index) => (Object.assign(Object.assign({}, course), { id: index + 1 })));
console.log(coursesWithId);
function cloner(obj) {
    // Перевіряємо, чи об'єкт передано
    if (!obj) {
        throw new Error('Обʼєкт не передано!');
    }
    // Масив для збереження функцій (ключ + сама функція)
    const functions = [];
    // Перебираємо всі ключі об'єкта
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            // Копіюємо функцію з новим контекстом
            const functionClone = obj[key].bind({});
            functions.push({ key, functionClone });
        }
    }
    // Клонуємо об'єкт без функцій
    const cloneObj = JSON.parse(JSON.stringify(obj));
    // Додаємо функції назад у клон
    for (const func of functions) {
        cloneObj[func.key] = func.functionClone;
    }
    return cloneObj;
}
const original = {
    id: 123,
    name: 'John',
    greet() {
        console.log(`Hello from ${this.name}`);
    },
    sum(a, b) {
        return a + b;
    }
};
const clone = cloner(original);
console.log(clone);
clone.greet();
console.log(clone.sum(2, 3));
