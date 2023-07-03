const date1 = new Date(2024, 2, 10, 12, 30, 0, 0);
console.log(date1);
console.log(date1.toLocaleTimeString());
const date2 = new Date(Date.UTC(2024, 2, 10, 12, 30, 0, 0));
console.log(date2);
console.log(date2.toLocaleTimeString());