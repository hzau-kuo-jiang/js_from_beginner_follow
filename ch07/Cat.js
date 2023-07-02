const Animal = require("./Animal");

class Cat extends Animal {
	constructor(name) {
		super(name);
	}
	
	makeSound() {
		console.log('Meow!')
	}
}

module.exports = Cat;