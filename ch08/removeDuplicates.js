peoples = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];

const removeDuplicates = (arr) => {
	return arr.filter((item, index) => arr.indexOf(item) === index);
};

console.log(removeDuplicates(peoples));