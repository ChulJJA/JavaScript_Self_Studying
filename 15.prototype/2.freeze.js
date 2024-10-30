const cj = { name: "cj" };
const dog = { name: "wow", animal: "dog", owner: cj };
// shallow freeze
Object.freeze(dog);
dog.name = "woff";
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
cj.name = "chul";
console.log(dog);

const cat = { ...dog };
// Assign: shallow copy
// Object.assign(cat, dog);
// Seal: prevent adding or deleting properties, but allows changing the value of existing properties.
Object.seal(cat);
console.log(cat);
cat.name = "meow";
console.log(cat);
delete cat.animal;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

const tiger = { name: "tiger" };
// PreventExtensions: prevent adding properties, but allows changing the value of existing properties and delete.
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = "tiger2";
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 3;
console.log(tiger);
