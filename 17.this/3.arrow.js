const dog = {
  name: "dog",
  play: function () {
    console.log("play");
  },
};
dog.play();
const obj = new dog.play();
console.log(obj);

const cat = {
  name: "cat",
  play() {
    console.log("meow");
  },
};

cat.play();
// const obj2 = new cat.play();

/**
 * features of arrow function:
 * 1. grammar is simpler
 * 2. cannot use new keyword (no prototype)
 * 3. cannot use arguments object
 * 4. binding this statically
 */

function sum(a, b) {
  console.log(arguments);
}
sum(1, 2);

const add = (a, b) => {
  console.log(arguments);
};
add(1, 2);

const printArrow = () => {
  console.log(this);
};
printArrow();
cat.printArrow = printArrow;
cat.printArrow();
