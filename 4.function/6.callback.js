// callback function
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// action is a callback function
function calculator(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}

calculator(1, 2, add);
calculator(1, 2, multiply);
console.clear();

const printNum = (num) => {
  console.log(num);
  console.log(num * 2);
};
function iterate(max, action) {
  for (let i = 0; i <= max; i++) {
    action(i);
  }
}
iterate(5, printNum);
// or
iterate(5, (num) => console.log(num));
iterate(5, (num) => console.log(num * 2));

setTimeout(() => {
  console.log("callback function after 3 sec");
}, 3000);
