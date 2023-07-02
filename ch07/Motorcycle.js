const Vehicle = require("./Vehicle");

class Motorcycle extends Vehicle {
	constructor(color, currentSpeed, maxSpeed, fuel) {
		super(color, currentSpeed, maxSpeed);
		this.fuel = fuel;
	}
	
	doWheelie() {
		console.log("Driving on one wheel!")
	}
}


module.exports = Motorcycle;