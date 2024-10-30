//Copy by Value

let a= 1;
let b = a;
b = 2;

console.log(a);
console.log(b);

//Copy by Reference
let apple = {
    name: 'apple',
};
let orange = apple;
orange.name = "orange";
console.log(apple);
console.log(orange);