// It will return undefined if you don't provide a return value for the function.
function print(text) {
  console.log(text);
}
print("Hello, World!");

function printNum(num) {
  if (num < 0) {
    return;
  } else {
    console.log(num);
  }
}
printNum(12);
printNum(-12);
