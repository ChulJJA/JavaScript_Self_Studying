// func(...iterable)
// [...iterable]
// {...obj}

function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 4);

// Array conccat
const fruits1 = ["apple", "kiwi"];
const fruits2 = ["strawberry", "banana"];
// let arr = fruits1.concat(fruits2);
let arr = [...fruits1, "Strawberry", ...fruits2];
console.log(arr);

//object
const cj = { name: "CJ", age: 25, home: { address: "home" } };
const updated = {
  ...cj,
  job: "s/w engineer",
};
console.log(cj);
console.log(updated);
