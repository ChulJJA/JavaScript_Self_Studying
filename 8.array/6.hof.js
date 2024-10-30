const fruits = ["banana", "strawberry", "grape", "strawberry"];
for (let i = 0; i < fruits.length; ++i) {
  console.log(fruits[i]);
}
//or
fruits.forEach(function (value) {
  console.log(value);
});
// or
fruits.forEach((value) => console.log(value));

const item1 = { name: "water", price: 2 };
const item2 = { name: "cookies", price: 3 };
const item3 = { name: "onigiri", price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === "cookies"); // find the first item that matches the condition and return the item
console.log(result);
result = products.findIndex((value) => value.name === "cookies"); // find the index of the first item that matches the condition and return the index
console.log(result);
result = products.some((item) => item.name === "cookies"); // check if at least one item matches the condition and return true or false
console.log(result);
result = products.every((item) => item.name === "cookies"); // check if all items match the condition and return true or false
console.log(result);
result = products.filter((item) => item.name === "cookies"); // filter all items that match the condition abd return the items
console.log(result);
console.clear();

const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2); // map all items and return the new items
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

result = nums.map((item) => [1, 2]);
console.log(result);
result = nums.flatMap((item) => [1, 2]); // flatmap all items and return the new items
console.log(result);
result = ["dream", "coding"].map((text) => text.split(""));
console.log(result);
result = ["dream", "coding"].flatMap((text) => text.split(""));
console.log(result);

const texts = ["hi", "abc"];
texts.sort(); // sort the items in ascending order
console.log(texts);
const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort(); //
console.log(numbers);
// if a - b is negative, a comes first, if a - b is positive, b comes first, if a - b is 0, a and b are the same
numbers.sort((a, b) => a - b); // sort the items in ascending order
console.log(numbers);

result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0); // reduce all items to a single value
console.log(result);
//or
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);

function replace(fruits, from, to) {
  return fruits.map((item) => (item === from ? to : item));
}

function count(fruits, target) {
  //   return fruits.reduce((counter, fruit) => {
  //     if (fruit === target) {
  //       ++counter;
  //     }
  //     return counter;
  //   }, 0);
  //or
  return fruits.filter((value) => value === target).length;
}

function match(input, search) {
  return input.filter((item) => search.includes(item));
}

function avg(nums, target) {
  //   let numsOverTarget = nums.filter((num) => num > target);
  //   let reduced = numsOverTarget.reduce((sum, value) => (sum += value), 0);
  //   return reduced / numsOverTarget.length;
  //or
  return nums
    .filter((num) => num > target)
    .reduce((avg, value, _, array) => avg + value / array.length, 0);
}
const fruits1 = ["banana", "strawberry", "grape", "strawberry"];
const fruits2 = ["banana", "kiwi", "grape"];
const nums_ = [3, 16, 5, 25, 4, 34, 21];
console.log(replace(fruits1, "strawberry", "kiwi"));
console.log(count(fruits1, "strawberry"));
console.log(match(fruits1, fruits2));
console.log(avg(nums_, 5));
