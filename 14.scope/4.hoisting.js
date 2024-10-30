// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
print();

function print() {
  console.log("hello");
}

// variable(let, const) only can hoisted declare not initialize.
// console.log(hi);
// let hi = "hi";

// const cat = new Cat();
// class Cat {}

// since variable x in the block is not initialized, it is in the temporal dead zone and accessing it will throw a ReferenceError
// even though there is a variable x in the outer scope.
let x = 1;
{
  console.log(x);
  let x = 2;
}
