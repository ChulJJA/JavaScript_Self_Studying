const text = "hello";
function func() {
  console.log(text);
}
func();

function outer() {
  const x = 0;
  function inner() {
    console.log(x);
  }
  return inner;
}
const func1 = outer();
func1();
