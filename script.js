// logical operators -> &&, ||, !
const a = 10;
const b = 5;
const c = 1;

// if (a < b) {
//     console.log(`a is less than b`);
// } else {
//     console.log(`a is not less than b`);
// }

if (a < b && a < c) {
    console.log(`a is less than b and c`);
} else if (b < c) {
    console.log(`b is less than a and c`);
} else {
    console.log(`c is less than a and b`);
}

let age;

if (10 < 5) {
    age = 10;
} else {
    age = 20;
}

// ternary operator -> ? :

console.log(age)

// condition ? true : false

const user = 10 > 100 ? "Nidha" : "Raj";
console.log(user)

// Math object -> methods
const max = Math.max(10, 20, 30);
console.log(max)
const min = Math.min(10, 20, 30);
console.log(min)
const random = Math.random();
console.log(random)
console.log(Math.round(10.49));
console.log(Math.floor(10.9))
console.log(Math.ceil(10.01))

// 1 - 10, 2 -> 10 ,3 - 1

// 21

// 21/10 -> 2.1 -> ceil -> 3

// Date
const timestamp = Date.now();
console.log(timestamp)

const dateTime = new Date();
console.log(dateTime.getFullYear());

// string
const str = "Techolas Technologies";

console.log(str[10])
console.log(str.charAt(10))
console.log(str.indexOf("T", 1))
console.log(str.length)
console.log(str.slice(0, 2))
console.log(str.slice(2, 6))
console.log(str.slice(-3))
console.log(str.slice(0, -3))
console.log(str.includes("Techolas"))
console.log(str.startsWith("Tech"))
console.log(str.split(" "));
// console.log(str.replace("T", "t"))
console.log(str.replaceAll("T", "t"))

const text = "            hey                              ";

console.log(text)
console.log(text.trim())
console.log(text.trimStart())
console.log(text.trimEnd())