arr = ['apple', 'banana', 'orange']
for (let i in arr) {
	console.log(arr[i])
}

obj = {name: 'John', age: 18}
for (let i in obj) {
	console.log(obj[i])
}
// for (let i of Object.entries(obj)) {
// 	console.log(i[0], i[1])
// }

for (const [key, value] of Object.entries(obj)) {
	console.log(key, value)
}