const Person = require('./Person');
const Motorcycle = require('./Motorcycle');

const person1 = new Person('John', 'Doe');
console.log(person1.greeting());
console.log(person1.fullName());
console.log(person1.firstName);
person1.firstName = 'Jane';
console.log(person1.firstName);
// console.log(person1.#firstName);

const person2 = new Person('Mary', 'Smith');
console.log(person2.greeting());

console.log(person1.compliment('John', 'car'));

let motor = new Motorcycle('red', 0, 200, 'gasoline');
console.log(motor.color);
motor.accelerate(50);
motor.move();

/*
function 绑定调用的对象
=> 指向window
* */
Person.prototype.introduce = function () {
	console.log(`Hi, my hobbies are ${this.hobby}`);
}
Person.prototype.favoriteColor = 'blue';
person1.introduce();
console.log(person1.favoriteColor);
const person3 = new Person('John', 'Doe', 'reading');
person3.introduce();
console.log(person3.favoriteColor);

Motorcycle.prototype.introduce = function () {
	console.log(`This is ${this.fuel}`)
}
motor.introduce();