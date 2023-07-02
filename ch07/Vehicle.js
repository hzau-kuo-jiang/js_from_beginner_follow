class Vehicle {
	constructor(color, currentSpeed, maxSpeed) {
		this.color = color;
		this.currentSpeed = currentSpeed;
		this.maxSpeed = maxSpeed;
	}
	
	move() {
		console.log(`moving at ${this.currentSpeed} km/h`)
	}
	
	accelerate(amount) {
		const newSpeed = this.currentSpeed + amount;
		this.currentSpeed = newSpeed <= this.maxSpeed ? newSpeed : this.maxSpeed;
	}
}

module.exports = Vehicle;