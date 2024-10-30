class Fruit {
  #name;
  #sexName;
  #type = "fruit";
  constructor(name, sexName) {
    this.#name = name;
    this.#sexName = sexName;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#sexName}`);
  };
}

const apple = new Fruit("apple", "sexApple");
//apple.#name = "orange"; --> SyntaxError: Private field '#name' must be declared in an enclosing class
console.log(apple);
