groups = [
	["Jane", "Matt", "Sara"],
	["Doug", "Sara", "Jane", "Matt"],
	["Doug", "Jane", "Jerry"],
]

// bad practice
outer:for (let group of groups) {
	for (let name of group) {
		if (name.startsWith("S")) {
			console.log(`Found ${name}!`);
			break outer;
		}
	}
}

// better practice
const findNameStartsWith = (groups, letter) => {
	for (let group of groups) {
		for (let name of group) {
			if (name.startsWith(letter)) {
				return name;
			}
		}
	}
	return null;
}

console.log(findNameStartsWith(groups, "S"));