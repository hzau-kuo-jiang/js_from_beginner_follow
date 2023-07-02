const logOne = () => {
	console.log("one");
}
const logTwo = () => {
	console.log("two");
}
const logThree = () => {
	console.log("three");
	logOne();
	logTwo();
}
const logFour = () => {
	console.log("four");
	setTimeout(logOne, 0);
	logThree();
}
logFour();