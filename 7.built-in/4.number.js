const num3 = 102;
console.log(num3.toExponential());

const num4 = 1234.12;
console.log(num4.toFixed());
console.log(num4.toString());
console.log(num4.toLocaleString("en-US"));
console.log(num4.toPrecision(5));

const num5 = 0.1 + 0.2 - 0.2;
function isEqual(origin, target) {
  return origin === target;
}
function isEqualEvenInEpsilon(origin, target) {
  return Math.abs(origin - target) < Number.EPSILON;
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num5, 0.1));
console.log(isEqualEvenInEpsilon(num5, 0.1));
