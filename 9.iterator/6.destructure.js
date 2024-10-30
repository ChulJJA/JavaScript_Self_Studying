const fruits = ["apple", "kiwi", "strawberry", "banana"];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ["apple", "appleEmoji"];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const CJ = { name: "cj", age: 20, job: "s/w engineer" };
function display({ name, age, job }) {
  console.log("name:", name);
  console.log("age:", age);
  console.log("job:", job);
}
display(CJ);

const { name, age, job: occupation, pet = "sexygirl" } = CJ;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);

const prop = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}
changeColor(prop);
