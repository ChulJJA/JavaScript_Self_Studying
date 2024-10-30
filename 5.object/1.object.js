//Object Literal {key: value}
//new Object()
//Object.create()

let apple = {
  name: "apple",
  hello: "world",
  0: 1,
  ["hello-bye2"]: "wow",
};

console.log(apple.name); //dot notation
console.log(apple["hello-bye2"]); //bracket notation
apple["name"];
apple.age = 25;
console.log(apple.age);
console.log(apple["age"]);
delete apple.age;
console.log(apple.age);
