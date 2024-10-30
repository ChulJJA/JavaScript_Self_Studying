function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => egg`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 'fried egg`);
}

function getChicken() {
  return Promise.resolve(`garden => chicken`);
}

// getChicken()
//   .catch((error) => console.log(error.name))
//   .then((chicken) => fetchEgg(chicken))
//   .then((egg) => fryEgg(egg))
//   .then((friedEgg) => console.log(friedEgg));
//or
getChicken()
  .catch((error) => console.log(error.name))
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
