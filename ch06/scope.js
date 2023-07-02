function confuseReader() {
	x = "Guess my scope...";
	console.log("Inside the function:", x);
}

confuseReader();
console.log("Outside of function:", x);