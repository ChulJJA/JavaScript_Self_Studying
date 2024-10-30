"use strict";

// ex1
var x = 1;
delete x;

// ex2
function add(x) {
  var a = 2;
  b = a + x;
}
add(1);

// ex3
function add(x) {
  var a = 2;
  var b = a + x;
  console.log(this);
}
add(1);

// ex4
const array = [1, 2, 3];
for (num of array) {
  console.log(num);
}
