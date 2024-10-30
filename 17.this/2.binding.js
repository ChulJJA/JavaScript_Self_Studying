// Dynamic Binding in this keyword
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`print cat: ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  // if we use arrow function, this will point to the global object
  this.printName = function () {
    console.log(`print dog: ${this.name}`);
  };
}

const cat1 = new Cat("cat1");
const dog1 = new Dog("dog1");
cat1.printName();
dog1.printName();

dog1.printName = cat1.printName;
dog1.printName();

function printOnMonitor(printName) {
  console.log("print on monitor");
  printName();
}
printOnMonitor(cat1.printName);
