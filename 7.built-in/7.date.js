console.log(new Date());
console.log(new Date("Oct 26, 2024"));
console.log(new Date("2024-10-26T07:24:00"));

console.log(Date.now());
console.log(Date.parse("2024-10-26T07:24:00"));

const now = new Date();
now.setFullYear(1999);
now.setMonth(5);
console.log(now.getFullYear());
console.log(now.getDate());

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());

const text__ = "hello, world!";
for (let i = 0; i < text__.length; i++) {
  console.log(text__[i]);
}

const ids = "user1, user2, user3, user4";
const id_array = ids.split(", ");
console.log(id_array);

setInterval(() => {
  const now = new Date();
  console.log(now.toString());
}, 1000);
