// const dog1 = { name: "wow", animal: "dog" };
// const dog2 = { name: "coco", animal: "sheep" };

function Dog(name, animal) {
  this.name = name;
  this.animal = animal;
  //   this.printName = () => {
  //     console.log(`${this.name} ${(this.animal)}`);
  //   };
}
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.animal}`);
};
const dog1 = new Dog("wow", "dog");
const dog2 = new Dog("coco", "sheep");
console.log(dog1, dog2);
dog1.printName();
dog2.printName();

// Overriding prototype method
dog1.printName = function () {
  console.log("hi!");
};

dog1.printName();
dog2.printName();

// Static method
Dog.hello = () => {
  console.log("hello!!");
};
Dog.hello();
Dog.MAX_AGE = 20;
