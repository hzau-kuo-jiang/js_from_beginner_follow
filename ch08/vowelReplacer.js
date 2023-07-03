const vowelReplacer = (str) => {
	const vowels = {
		a: 0,
		e: 1,
		i: 2,
		o: 3,
		u: 4,
		A: 0,
		E: 1,
		I: 2,
		O: 3,
		U: 4
	}
	return str.replace(/[aeiou]/gi, (match) => vowels[match])
}

console.log(vowelReplacer('I love JavaScript'))