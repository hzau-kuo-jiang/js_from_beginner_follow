const start = 10;
const loop1 = (num) => {
	console.log("Loop 1:", num);
	if (num > 0) {
		loop1(num - 1);
	}
}
loop1(start);

const loop2 = (num) => {
	console.log("Loop 2:", num);
	if (num < start) {
		loop2(num + 1);
	}
}