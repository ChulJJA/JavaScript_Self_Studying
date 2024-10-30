let string = "Hello, World!";
string = `Hello, Wold!`;
console.log(string);

string = "'hello'";
console.log(string);

string = "hi!\nasd\t\tasd\n\\\n\u09AC";
console.log(string);

let id = "cj";

//Template Literals
let greetings = "cj" +  id + "!";
console.log(greetings);
greetings = `'hi, ${id} 
heyheyhey`;
console.log(greetings);