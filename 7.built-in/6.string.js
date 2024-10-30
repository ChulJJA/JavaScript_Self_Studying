const textObj = new String("Hello, World!");
const text = "Hello, World!";
console.log(textObj);
console.log(text);

console.log(text.length);
console.log(text.indexOf("W"));
console.log(text.lastIndexOf("l"));

console.log(text.includes("World"));
console.log(text.startsWith("Hell"));
console.log(text.endsWith("d!"));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0, 2));
console.log(text.slice(2));
console.log(text.slice(-2));

const space = "      space           ";
console.log(space.trim());

const longText = "Hello, World! 1231231231231232";
console.log(longText.split(" "));
console.log(longText.split(" ", 2));
console.log(longText.split(", ", 2));
