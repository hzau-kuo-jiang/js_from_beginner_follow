// test undefined equal -> true
let a;
let b;
console.log(a===b);
console.log(a);
console.log(b);

console.log(typeof a);

// 默认未定义的变量值为undefined,这时若想起到区分作用,就不应该刻意给变量赋值一个和默认值相同的值
// 而是 使用null,以示区分

let c = null;
console.log(c===a);

console.log(6/2);
console.log(5/2)