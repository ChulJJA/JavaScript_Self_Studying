console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval("const num = 2; console.log(num)");
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat("12.43")); // Change to float
console.log(parseInt("12.11")); // Change to integer

const URL = "https://이철승.com";
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

const part = "이철승.com";
console.log(encodeURIComponent(part));
