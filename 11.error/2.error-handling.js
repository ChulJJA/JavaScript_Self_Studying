function readfile(path) {
  throw new Error("File not exist");
}

function processFile(path) {
  let content;
  try {
    content = readfile(path);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    content = "basic content";
  } finally {
    console.log("success or fail, it can see the resource");
  }
  const result = "hi" + content;
  return result;
}

const result = processFile("legendCJ");
console.log(result);
