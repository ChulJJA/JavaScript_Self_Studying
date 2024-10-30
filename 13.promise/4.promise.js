function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error("seconds is lower than 0."));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(1)
  .then(() => console.log("timer set"))
  .catch(console.error)
  .finally(() => console.log("done"));
