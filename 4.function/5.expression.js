// function expression const name = function () {};
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// Arrow function const name = () => {};
add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));
//or
add = (a, b) => a + b;
console.log(add(1, 2));

// Constructor function const object = new Function();

// Immediately Invoked Function Expression (IIFE)
(function run() {
  console.log("Run");
})();
