"use strict";
function User(id, name, surname, phone) {
    return {
        id,
        name,
        surname,
        phone
    };
}
const user = User(1, 'vjfj', 'vjffiufiu', '+54687987864');
console.log(user);
//@ts-ignore
const users = [
    User(2, 'bfxngfx', 'vjlhfkyfuky', '5468787686'),
    User(1, 'vjfj', 'vjffiufiu', '+54687987864'),
    User(4, 'gfxshrs', 'dzaeaegt', '+546546546'),
    User(5, 'zhdzgt', 'ukiyutui', '+54654678'),
    User(3, 'zgre', 'sgrzgezgd', '+5468798798'),
    User(6, 'hshtr', 'dfzeare', '+467879795'),
    User(8, 'dhr', 'aeaqweqre', '+54687987864'),
    User(9, ',kjgik', 'ffateasht', '+16498798798'),
    User(7, 'eaetdrh', 'sararea', '+54687987864'),
    User(10, 'fdyhd', 'ihoyuo', '+54687987864')
];
console.log(users);
//@ts-ignore
const filterUsers = users.filter((user) => user.id % 2 === 0);
console.log(filterUsers);
//@ts-ignore
console.log(users.sort((user1, user2) => user1.id - user2.id));
function Client(id, name, surname, email, phone, order) {
    return {
        id,
        name,
        surname,
        email,
        phone,
        order
    };
}
const clients = [
    Client(1, 'hghfjh', 'vgfiyfkyf', 'hgchjdsgj@bvh.com', '+478979879', [{ title: 'tv', price: 546546 }, { title: 'phone', price: 4566 }]),
    Client(2, 'haearf', 'fshts', 'fdfgf@bvh.com', '+47464768', [{ title: 'tv', price: 786546 }]),
    Client(3, 'khvfli', 'ugoligli', 'hgch@bvh.com', '+4756468', [{ title: 'tv', price: 546546 }, { title: 'phone', price: 4566 }, { title: 'giutiut', price: 4566 }]),
    Client(4, 'gagte', 'gcjhfj', 'fagr@bvh.com', '+488787', [{ title: 'tv', price: 546546 }, { title: 'phone', price: 4566 }]),
    Client(5, 'lhg;uog', 'eagre', 'fkyu@bvh.com', '+4511564899', [{ title: 'tv', price: 546546 }, { title: 'phone', price: 4566 }, { title: 'phone', price: 7566 }, { title: '68787', price: 566 }]),
    Client(6, 'saga', 'tfjt', 'waqewq@bvh.com', '+468468', [{ title: 'tv', price: 546546 }, { title: 'phone', price: 4566 }]),
    Client(7, 'jryejy', 'eaegr', 'kjhlku@bvh.com', '+8978797', [{ title: 'tv', price: 546546 }, { title: 'phone', price: 4566 }]),
    Client(8, 'uyloy', 'aeat', 'jhkj@bvh.com', '+478945646', [{ title: 'tv', price: 546546 }]),
    Client(9, 'kljglo', 'dsdshg', 'agea@bvh.com', '+478979879', [{ title: 'tv', price: 546546 }, { title: 'phone', price: 4566 }, { title: 'dtdjhf', price: 41566 }]),
    Client(10, 'hgkj', 'veagrae', 'dahtrs@bvh.com', '+475468', [{ title: 'tv', price: 546546 }, { title: 'phone', price: 4566 }])
];
const sort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sort);
function Car(mode, producer, year, maxSpeed, engineVolume) {
    const car = {
        mode,
        producer,
        year,
        maxSpeed,
        engineVolume,
        drive: function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        },
        info: function () {
            console.log('--- Інформація про авто ---');
            for (const key in this) {
                if (typeof this[key] !== 'function') {
                    console.log(`${key}:`, this[key]);
                }
            }
        },
        increaseMaxSpeed: function (speedToAdd) {
            if (speedToAdd > 0) {
                this.maxSpeed += speedToAdd;
            }
        },
        changeYear: function (newYear) {
            if (newYear > 1815) {
                this.year = newYear;
            }
        },
        addDriver: function (driver) {
            this.driver = driver;
        }
    };
    return car;
}
const car = Car('Mustang', 'Ford', 2020, 220, 5.0);
car.drive();
car.increaseMaxSpeed(100);
car.changeYear(2023);
car.addDriver({ name: 'Oleh', age: 30 });
car.info();
class Car1 {
    constructor(mode, producer, year, maxSpeed, engineVolume) {
        this.mode = mode;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        for (const key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                console.log(`${key}:`, this[key]);
            }
        }
    }
    increaseMaxSpeed(speedToAdd) {
        if (speedToAdd > 0) {
            this.maxSpeed += speedToAdd;
        }
    }
    changeYear(year) {
        if (year > 1815) {
            this.year = year;
        }
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
const car1 = new Car1('Mustang', 'Ford', 2020, 220, 5.0);
car1.drive();
car1.info();
car1.increaseMaxSpeed(100);
car1.changeYear(2023);
car1.addDriver({ name: 'Oleh', age: 30 });
console.log(car1);
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
const cinderellas = [
    new Cinderella('sofy', 18, 34),
    new Cinderella('sofy1', 19, 35),
    new Cinderella('sofy2', 20, 36),
    new Cinderella('sofy3', 21, 37),
    new Cinderella('sofy4', 22, 38),
    new Cinderella('sofy5', 23, 39),
    new Cinderella('sofy6', 24, 40),
    new Cinderella('sofy7', 25, 41),
    new Cinderella('sofy8', 26, 42),
    new Cinderella('sofy9', 27, 43),
];
const prince = new Prince('pit', 20, 36);
const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);
prince.wife = cinderellaMain;
console.log(cinderellaMain);
Array.prototype.myFilter = function (predicate) {
    const result = [];
    for (const item of this) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
};
let users1 = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
const result = users1.myFilter((user) => user.status);
console.log(result);
