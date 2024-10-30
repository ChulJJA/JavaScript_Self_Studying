class Fruit {
  static MAX_FRUITS = 5;
  constructor(name, sexName) {
    this.name = name;
    this.sexName = sexName;
  }
  // class level method
  static makeRandomFruit() {
    return new Fruit("banana", "sexBanana");
  }
  // Instance level method
  display = () => {
    console.log(`${this.name}: ${this.sexName}`);
  };
}
console.log(Fruit.MAX_FRUITS);
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.name);

Math.pow();
Number.isFinite(1);
