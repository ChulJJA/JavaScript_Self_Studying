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

async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}

fetchFruits().then((fruits) => console.log(fruits));

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => egg`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 'fried egg`);
}

function getChicken() {
  return Promise.resolve(`garden => chicken`);
}

async function fetchChicken() {
  const chicken = await getChicken();
  const egg = await fetchEgg();
  const friedEgg = await fryEgg();
  return [chicken, egg, friedEgg];
}

fetchChicken().then(console.log);
