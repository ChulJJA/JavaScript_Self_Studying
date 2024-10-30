const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}

const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  // print key
  console.log(item);
}

const iterator = array.values();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().done);
//or
while (true) {
  const item = iterator.next();
  if (item.done) {
    break;
  }
  console.log(item.value);
}

const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};
//or
function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      let num = initialValue;
      return {
        next() {
          return { value: callback(num++), done: num > maxValue };
        },
      };
    },
  };
}

for (const num of multiple) {
  console.log(num);
}
const nums = makeIterable(0, 10, (n) => n * 2);

for (const num of nums) {
  console.log(num);
}
