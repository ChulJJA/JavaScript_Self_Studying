// Shallow Copy - Copying the reference of the object
// Copying the reference of the object, so if the object is changed, the copied object will also be changed.
// Array.from(), concat(), slice(), spread(), object.assign().
const pizza = { name: "pizza", price: 2 };
const ramen = { name: "ramen", price: 3 };
const sushi = { name: "sushi", price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log("store1:", store1);
console.log("store2:", store2);

store2.push(sushi);
console.log("store1:", store1);
console.log("store2:", store2);

pizza.price = 4;
console.log("store1:", store1);
console.log("store2:", store2);

function replace(fruits, from, to) {
  const replaced = Array.from(fruits);
  for (let i = 0; i < fruits.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}

function count(fruits, item) {
  let counter = 0;
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === item) {
      counter++;
    }
  }
  return counter;
}

function addNotExists(fruits1, fruits2) {
  let result = [];
  for (let i = 0; i < fruits2.length; i++) {
    if (fruits2.includes(fruits1[i])) {
      result.push(fruits2[i]);
    }
  }
  return result;
}

const fruits = ["banana", "strawberry", "grape", "strawberry"];
const fruits1 = ["banana", "kiwi", "grape"];
const fruits2 = ["banana", "strawberry", "grape", "strawberry"];
const result = replace(fruits, "strawberry", "kiwi");
const count_item = count(fruits, "strawberry");
const addItem = addNotExists(fruits1, fruits2);
console.log(result);
console.log(count_item);
console.log(addItem);
