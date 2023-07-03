const shuffleStr = (str) => {
	let arr = str.split('');
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		let j = Math.floor(Math.random() * len);
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr.join('');
}

console.log(shuffleStr('JavaScript'));