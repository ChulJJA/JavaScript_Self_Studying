function add(num1, num2) {
  console.log("add");
  return num1 + num2;
}

const result = add(1, 2);
console.log(result);

function fullName(firstName, lastName) {
  return `${lastName} ${firstName}`;
}

let lastName = "Lee";
let firstName = "ChulJJA";
console.log(fullName(firstName, lastName));

let lastName1 = "Sex";
let firstName1 = "King";
console.log(fullName(firstName1, lastName1));
