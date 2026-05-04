// // logical operators -> &&, ||, !
// const a = 10;
// const b = 5;
// const c = 1;

// // if (a < b) {
// //     console.log(`a is less than b`);
// // } else {
// //     console.log(`a is not less than b`);
// // }

// if (a < b && a < c) {
//     console.log(`a is less than b and c`);
// } else if (b < c) {
//     console.log(`b is less than a and c`);
// } else {
//     console.log(`c is less than a and b`);
// }

// let age;

// if (10 < 5) {
//     age = 10;
// } else {
//     age = 20;
// }

// // ternary operator -> ? :

// console.log(age)

// // condition ? true : false

// const user = 10 > 100 ? "Nidha" : "Raj";
// console.log(user)

// // Math object -> methods
// const max = Math.max(10, 20, 30);
// console.log(max)
// const min = Math.min(10, 20, 30);
// console.log(min)
// const random = Math.random();
// console.log(random)
// console.log(Math.round(10.49));
// console.log(Math.floor(10.9))
// console.log(Math.ceil(10.01))

// // 1 - 10, 2 -> 10 ,3 - 1

// // 21

// // 21/10 -> 2.1 -> ceil -> 3

// // Date
// const timestamp = Date.now();
// console.log(timestamp)

// const dateTime = new Date();
// console.log(dateTime.getFullYear());

// // string
// const str = "Techolas Technologies";

// console.log(str[10])
// console.log(str.charAt(10))
// console.log(str.indexOf("T", 1))
// console.log(str.length)
// console.log(str.slice(0, 2))
// console.log(str.slice(2, 6))
// console.log(str.slice(-3))
// console.log(str.slice(0, -3))
// console.log(str.includes("Techolas"))
// console.log(str.startsWith("Tech"))
// console.log(str.split(" "));
// // console.log(str.replace("T", "t"))
// console.log(str.replaceAll("T", "t"))

// const text = "            hey                              ";

// console.log(text)
// console.log(text.trim())
// console.log(text.trimStart())
// console.log(text.trimEnd())

// // example for slice

// // hide the number -> 9876543210 -> 98******10

// const number = 9876543210;
// const numberString = number.toString();
// console.log(numberString)

// const left_side = numberString.slice(0, 2);
// const right_side = numberString.slice(-2);

// const hiddenNumber = left_side + "******" + right_side;
// console.log(hiddenNumber)

// // hide email -> sample_user@gmail.com => sam*****@gmail.com

// const email = "sample_user@gmail.com";
// const emailArr = email.split("@");
// const username = emailArr[0].slice(0, 3);
// const domain = emailArr[1];
// const hiddenEmail = username + "*****@" + domain;
// console.log(hiddenEmail)

// function -> block of code to perform a specific task.
// callback function -> function passed as an argument to another function.

// volume

function display(value) {
    console.log(value);
}

function getVolume(l, b, h, callback) {
    const volume = l * b * h;
    callback(volume);
}

getVolume(10, 20, 30, display);

// array
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

// array methods
console.log(arr[3])
console.log(arr.at(3))

// add/remove value
arr.unshift(10, 20, 30)
console.log(arr)
arr.shift()
console.log(arr)

arr.push(50, 60, 70);
console.log(arr)
arr.pop()
console.log(arr)

// methods
console.log(arr.indexOf(4))
console.log(arr.at(4))

arr[1] = 100;
console.log(arr)

console.log(arr.length);
// console.log(arr.reverse())

console.log(arr)

// delete element/s 
const r = arr.splice(2, 3)
console.log(arr)
console.log(r)

// add element/s
arr.splice(1, 0, 1000, 2000, 3000);
console.log(arr)

// delete and add element/s
arr.splice(1, 3, -1, -2, -3);
console.log(arr)

console.log(arr.includes(200))

const array = [1, 2, 3, 4, 5, 6];

console.log(array.join(" "));
console.log(arr.toString())





