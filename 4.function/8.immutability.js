// Copy by Value
function display(num) {
  num = 5;
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

// Copy by Reference
function displayObj(obj) {
  obj.name = "John";
  console.log(obj);
}
const cj = { name: "CJ" };
displayObj(cj);
console.log(cj);

function changeName(obj) {
  return { ...obj, name: "Bob" };
}
