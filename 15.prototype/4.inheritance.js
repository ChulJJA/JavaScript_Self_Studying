function Animal(name, animal) {
  this.name = name;
  this.animal = animal;
}
Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.animal}`);
};

function Dog(name, animal, owner) {
  Animal.call(this, name, animal);
  this.owner = owner;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.play = () => {
  console.log("play");
};

const dog1 = new Dog("woff", "dog", "cj");
console.log(dog1);

function Tiger(name, animal) {
  Animal.call(this, name, animal);
}
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log("hunt");
};

const tiger1 = new Tiger("tiger", "tiger");
tiger1.printName();
tiger1.hunt();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
console.log(tiger1 instanceof Dog);
console.log(tiger1 instanceof Animal);
console.log(tiger1 instanceof Tiger);
