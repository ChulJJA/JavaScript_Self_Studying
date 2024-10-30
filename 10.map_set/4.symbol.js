const map = new Map();
const key1 = "key";
const key2 = "key";
map.set(key1, "hello");
console.log(map.get(key2));
console.log(key1 === key2);

const key3 = Symbol("key");
const key4 = Symbol("key");
console.log(map.get(key3));
console.log(key3 === key4);

// Global Symbol Registry
const k1 = Symbol.for("key");
const k2 = Symbol.for("key");
console.log(k1 === k2);

console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(key3));

const obj = { [k1]: "hello", [Symbol("key")]: 1 };
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol("key")]);
