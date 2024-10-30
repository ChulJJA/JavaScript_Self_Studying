function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("banana");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("apple");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange"));
}

Promise.all([getBanana(), getApple()]).then((fruits) =>
  console.log("all", fruits)
);
Promise.allSettled([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.log());

Promise.race([getBanana(), getApple()]).then((fruits) =>
  console.log("race", fruits)
);
