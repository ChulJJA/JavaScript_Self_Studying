// parameters are basically undefined if not passed
// parameters are saved in arguments object
// default parameters can be set
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[1]);
  return a + b;
}

console.log(add(1, 2, 3));

// Rest parameters
function sum(a, b, ...nums) {
  console.log(a);
  console.log(b);
  console.log(nums);
}
sum(1, 2, 3, 4, 5);
