class Person {
	#firstName;
	#lastName;
	
	constructor(firstName, lastName, hobby) {
		this.#firstName = firstName;
		this.#lastName = lastName;
		this.hobby = hobby;
	}
	
	get firstName() {
		return this.#firstName;
	}
	
	set firstName(value) {
		if (value.startsWith('M')) {
			this.#firstName = value;
		} else {
			this.#firstName = 'M' + value;
		}
	}
	
	get lastName() {
		return this.#lastName;
	}
	
	set lastName(value) {
		this.#lastName = value;
	}
	
	fullName() {
		return `${this.#firstName} ${this.#lastName}`;
	}
	
	greeting() {
		return `Hello there ${this.#firstName} ${this.#lastName}`;
	}
	
	compliment(name, obj) {
		return `That's a nice ${obj}, ${name}!`;
	}
	
}


module.exports = Person;