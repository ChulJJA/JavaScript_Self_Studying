// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}: sexapple`);
//   },
// };

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name}: sexOrange`);
//   },
// };

//Constructor Function
function Fruit(name, sexName) {
  this.name = name;
  this.sexName = sexName;
  this.display = () => {
    console.log(`${this.name}: ${this.sexName}`);
  };
  //return this; can be omitted
}

const apple = new Fruit("apple", "sexApple");
const orange = new Fruit("orange", "sexOrange");
console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.sexName);
apple.display();
