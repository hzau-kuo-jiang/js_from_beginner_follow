const runUntilGreaterThan10 = (num) => {
	console.log("runUntilGreaterThan10:", num);
	if (num < 10) {
		runUntilGreaterThan10(num + 1);
	}
}

runUntilGreaterThan10(1);