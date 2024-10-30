"use strict";
/**
 * global context this
 * browser:
 * node: module
 */
const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);
console.clear();

/**
 * function context this
 * undefiend in strict mode
 * global this in non-strict mode
 */
function func() {
  console.log(this);
}
func();

/**
 * constructor or class context this points to the instance
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat("cat1");
const cat2 = new Cat("cat2");
cat1.printName();
cat2.printName();
