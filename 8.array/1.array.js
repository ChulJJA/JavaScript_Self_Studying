let array = new Array(2);
console.log(array);

array = new Array(1, 2, 3);
console.log(array);

array = Array.of(1, 2);
console.log(array);

const anotherArray = [1, 2, 3, 4, 5];
console.log(anotherArray);

array = Array.from("text");
console.log(array);

array = Array.from({
  0: "Hi",
  1: "Hello",
  length: 2,
});
console.log(array);
