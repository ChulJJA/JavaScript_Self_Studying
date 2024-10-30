// Object only can point to one prototype, so if you want to inherit multiple prototypes, you can use mixin.
// Mixin is a class that contains methods for other classes.

const play = {
  play: function () {
    console.log(`${this.name} "play"`);
  },
};
const sleep = {
  sleep: function () {
    console.log(`${this.name} "sleep"`);
  },
};
function Dog(name) {
  this.name = name;
}
Object.assign(Dog.prototype, play, sleep);
const dog = new Dog("woff");
console.log(dog);
dog.play();
dog.sleep();

class Animal {
  constructor(name, animal) {
    this.name = name;
    this.animal = animal;
  }
  printName() {
    console.log(`${this.name} ${this.animal}`);
  }
}
class Doggy extends Animal {
  play() {
    console.log(`${this.name} "play"`);
  }
  sleep() {
    console.log(`${this.name} "sleep"`);
  }
}

class Tiger extends Animal {
  hunt() {
    console.log(`${this.name} "hunt"`);
  }
}

const dog1 = new Doggy("woff", "dog");
const tiger = new Tiger("tiger", "tiger");
dog1.printName();
tiger.printName();
console.log(dog1 instanceof Doggy);
console.log(dog1 instanceof Animal);
console.log(tiger instanceof Tiger);
console.log(tiger instanceof Animal);
