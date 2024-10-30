const map = new Map([
  ["key1", "apple"],
  ["key2", "banana"],
]);
console.log(map);

console.log(map.size);

console.log(map.has("key1"));
console.log(map.has("key6"));

map.forEach((value, key) => console.log(key, value));

console.log(map.keys());
console.log(map.values());
console.log(map.entries());

console.log(map.get("key1"));
console.log(map.get("key4"));

map.set("key3", "kiwi");
console.log(map);

map.delete("key3");
console.log(map);

map.clear();
console.log(map);

const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, description: "nice milk" };
const obj = {
  [key]: milk,
};
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]);
console.log(map2[key]);
console.log(map2.get(key));


