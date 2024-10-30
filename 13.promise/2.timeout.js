function execute() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 3000);
  console.log("3");
}

execute();

function runInDelay(callback, seconds) {
  if (seconds < 0) {
    throw new Error("seconds must be larger than 0");
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log("sexgimojji");
  }, 1);
} catch (error) {
  console.log(error);
}
