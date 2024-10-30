const set = new Set([1, 2, 3]);
console.log(set);
console.log(set.size);
console.log(set.has(2));
console.log(set.has(6));

set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// set cannot add same value
set.add(6);
console.log(set);
set.add(6);
console.log(set);

set.delete(6);
console.log(set);

set.clear();
console.log(set);

const obj1 = { name: "apple", price: 8 };
const obj2 = { name: "banana", price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);
obj1.price = 10;
objs.add(obj1);
console.log(objs);

const obj3 = { name: "banana", price: 5 };
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs);

function removeDuplicate(array) {
  return [...new Set(array)];
}
const fruits = ["banana", "apple", "grape", "banana", "apple", "peach"];
console.log(removeDuplicate(fruits));

function FindIntersection(set1, set2) {
  return new Set([...set1].filter((item) => set2.has(item)));
}
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
console.log(FindIntersection(set1, set2));
