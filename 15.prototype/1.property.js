const obj = {
  name: "wow",
  animal: "dog",
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log("name" in obj);
console.log(obj.hasOwnProperty("name"));

const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors);
const desc = Object.getOwnPropertyDescriptors(obj, "name");
console.log(desc);

Object.defineProperty(obj, "name", {
  value: "woff",
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(obj.name);
console.log(Object.keys(obj));

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: "Chul",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "Lee",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${this.firstname} ${this.lastName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split("");
    },
    configurable: true,
  },
});
console.log(student);
