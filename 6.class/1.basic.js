class Fruit {
  constructor(name, sexName) {
    this.name = name;
    this.sexName = sexName;
  }
  display = () => {
    console.log(`${this.name}: ${this.sexName}`);
  };
}

// apple and orange are instances of Fruit
const apple = new Fruit("apple", "sexApple");
const orange = new Fruit("orange", "sexOrange");
console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.sexName);
apple.display();

// obj is an object
const obj = { name: "CJ", age: 25 };
