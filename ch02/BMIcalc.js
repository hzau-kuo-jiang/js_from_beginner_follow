function getCentimetersFormInch(inch) {
	return inch * 2.54;
}

function getKiloFormPound(pound) {
	return pound / 2.2;
}

function getBMI(kilo, centimeters) {
	const meter = centimeters / 100;
	return kilo / (meter * meter);
}

console.log(`The BMI is ${getBMI(getKiloFormPound(140), getCentimetersFormInch(70)).toFixed(2)}`)