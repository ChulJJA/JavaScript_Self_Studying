const chul = {
  name: "cj",
  age: 20,
  eat: () => {
    console.log("eat");
  },
};

//Serializing
const json = JSON.stringify(chul);
console.log(chul);
console.log(json);

//Deserializing
const obj = JSON.parse(json);
console.log(obj);
