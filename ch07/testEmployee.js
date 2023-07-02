const Employee = require('./Employee');

const employeeArray = [
	new Employee('John', 'Smith', 10),
	new Employee('Jane', 'Doe', 5),
	new Employee('Mary', 'Jones', 15),
	new Employee('Mike', 'Smith', 20),
];

Employee.prototype.details = function () {
	return `${this.firstName} ${this.lastName} has worked for ${this.workedYears} years`;
}

employeeArray.forEach(employee => console.log(employee.details()));