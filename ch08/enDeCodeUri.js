let uri = 'https://www.example.com?name=kuo jiang';
let encodeUri = encodeURI(uri);
console.log(`encodeUri: ${encodeUri}`);
let decodeUri = decodeURI(encodeUri);
console.log(`decodeUri: ${decodeUri}`);

encodeUri = encodeURIComponent(uri);
console.log(`encodeUri: ${encodeUri}`);
decodeUri = decodeURIComponent(encodeUri);
console.log(`decodeUri: ${decodeUri}`);

console.log(decodeURIComponent('How\'s%20it%20going%3F'));
console.log(encodeURIComponent('How\'s it going?'));

uri = 'http://www.basescripts.com?=Hello World';
encodeUri = encodeURI(uri);
console.log(`encodeUri: ${encodeUri}`);
decodeUri = decodeURI(encodeUri);
console.log(`decodeUri: ${decodeUri}`);