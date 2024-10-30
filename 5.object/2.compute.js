const obj = {
  name: "CJ",
  age: 25,
};
obj.name;
obj.age;

// when you want to get the value of the key from the object dynamically
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, "name"));

function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, "job", "developer");
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(obj, "job", "developer");
console.log(obj);
