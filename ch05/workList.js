const createWork = (num) => {
	const name = `Lesson ${num}`;
	const status = num % 2 === 1;
	return {name, status};
}

let workList = [];
for (let i = 1; i <= 10; i++) {
	workList.push(createWork(i));
}
console.log(workList);