class Car {
	constructor(name, speed) {
		this._name = name;
		this._speed = speed;
	}
	
	get name() {
		return this._name;
	}
	
	set name(value) {
		this._name = value;
	}
	
	get speed() {
		return this._speed;
	}
	
	set speed(value) {
		this._speed = value;
	}
	
	run() {
		console.log(`${this._name}的速度是${this._speed}`);
	}
}

const car1 = new Car('BMW', 100);
car1.run();
car1.name = 'Benz';
car1.speed = 200;
car1.run();