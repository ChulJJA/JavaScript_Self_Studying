const fruits = ["apple", "banana", "cherry", "watermelon"];

console.log(Array.isArray(fruits));
console.log(Array.isArray({}));
console.log(Array.isArray([]));

console.log(fruits.indexOf("banana"));
console.log(fruits.includes("banana")); // check if the array contains the item and return boolean

let length = fruits.push("orange"); // pushback
console.log(fruits);
console.log(length);
length = fruits.unshift("kiwi"); // pushfront
console.log(fruits);
console.log(length);

let lastItem = fruits.pop(); // popback
console.log(fruits);
console.log(lastItem);
let firstItem = fruits.shift(); // popfront
console.log(fruits);
console.log(firstItem);

const deleted = fruits.splice(1, 1); // remove 1 item from index 1
console.log(fruits);
console.log(deleted);
fruits.splice(1, 2, "mango", "peach"); // remove 2 items from index 1 and add 2 items
console.log(fruits);

let newArr = fruits.slice(0, 2); // copy from index 0 to 2
console.log(newArr);
console.log(fruits);
newArr = fruits.slice(); // copy all
console.log(newArr);
console.log(fruits);
newArr = fruits.slice(2); // copy from index 2 to end
console.log(newArr);
console.log(fruits);
newArr = fruits.slice(-2); // copy from index -2 to end
console.log(newArr);
console.log(fruits);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); // merge arr1 and arr2
console.log(arr1);
console.log(arr2);
console.log(arr3);

const arr4 = arr3.reverse();
console.log(arr4);

let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat()); // flatten array
console.log(arr.flat(2)); // flatten array 2 levels

arr = arr.flat(2);
arr.fill(0); // fill all with 0
console.log(arr);
arr.fill("s", 1, 3); // fill from index 1 to 3 with "s"
console.log(arr);
arr.fill("a", 1); // fill from index 1 to end with "a"
console.log(arr);

let text = arr.join(); // join with comma
console.log(text);
text = arr.join(" | ");
console.log(text);
