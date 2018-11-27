// let and const

// //ES5
// var name5 = "Jane Smith";
// var age5 = 24;
// name5 = "Jame Miller";

// console.log(name5, age5);

// // ES6
// const name6 = "Jane Smith";
// let age6 = 24;
// // name6 = "Jane Miller";
// // console.log(name6);

// // ES5
// function driverLiscence5(passedTest) {
//   if (passedTest) {
//     console.log(firstName);
//     var firstName = "John";
//     var yearOfBirth = 1990;
//   }
//   console.log(
//     firstName +
//       " born in " +
//       yearOfBirth +
//       " is now offically allowed to driver car"
//   );
// }

// driverLiscence5(true);

// // ES6
// // ES5
// function driverLiscence6(passedTest) {
//   //   console.log(firstName);
//   let firstName;
//   const yearOfBirth = 1990;
//   if (passedTest) {
//     firstName = "John";
//     //const yearOfBirth = 1990;
//   }
//   console.log(
//     firstName +
//       " born in " +
//       yearOfBirth +
//       " is now offically allowed to driver car"
//   );
// }

// driverLiscence6(true);

// let i = 23;
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

// var i = 23;
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

////////////////////////////////////
// Blocks and IIFEs

// //ES6
// {
//   const a = 1;
//   let b = 2;
//   var c = 3;
// }
// // console.log(a + b);
// console.log(c);

// // ES5
// (function() {
//   var c = 10;
// })();
// // console.log(c);

////////////////////////////////////
// Strings

// let firstName = "john";
// let lastName = "Smith";
// const yearOfBirth = 1990;
// function calcAge(year) {
//   return 2018 - year;
// }

// // ES5
// console.log(
//   "This is " +
//     firstName +
//     " " +
//     lastName +
//     ". He was born in " +
//     yearOfBirth +
//     ". Today, he is " +
//     calcAge(yearOfBirth) +
//     " years old."
// );

// // ES6
// console.log(
//   `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(
//     yearOfBirth
//   )} years old.`
// );

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith("j"));
// console.log(n.endsWith("h"));
// console.log(n.includes(" "));
// console.log(`${firstName} `.repeat(5));

////////////////////////////////////
// Arrow functions

// const year = [1980, 1965, 1982, 1947];

// // ES5
// var ages5 = year.map(function(item, index) {
//   return 2018 - item;
// });

// console.log(ages5);

// // ES6
// let ages6 = year.map(element => 2016 - element);
// console.log(ages6);

// ages6 = year.map(
//   (element, index) => `Age element ${index + 1} is ${2018 - element}`
// );
// console.log(ages6);

// ages6 = year.map((element, index) => {
//   const now = new Date().getFullYear();
//   const age = now - element;
//   return `Age element ${index + 1} is ${age}`;
// });

// console.log(ages6);

////////////////////////////////////
// Arrow functions 2

// // ES5
// var box5 = {
//   color: "green",
//   position: 1,
//   clickMe: function() {
//     var self = this;
//     document.querySelector(".green").addEventListener("click", function() {
//       alert("This is box number " + self.position + " and it is " + self.color);
//     });
//   }
// };
// //box5.clickMe();

// // ES 6
// const box6 = {
//   color: "green",
//   position: 1,
//   clickMe: function() {
//     document.querySelector(".green").addEventListener("click", () => {
//       alert("This is box number " + this.position + " and it is " + this.color);
//     });
//   }
// };
//box6.clickMe();

// const box66 = {
//   color: "green",
//   position: 1,
//   clickMe: () => {
//     document.querySelector(".green").addEventListener("click", () => {
//       alert("This is box number " + this.position + " and it is " + this.color);
//     });
//   }
// };
// box66.clickMe();

// function Person(name) {
//   this.name = name;
// }

// // ES5
// Person.prototype.myFriend5 = function(friends) {
//   var arr = friends.map(
//     function(element) {
//       return this.name + " is friends with " + element;
//     }.bind(this)
//   );

//   console.log(arr);
// };

// var friends = ["Bob", "Jane", "Mark"];
// new Person("John").myFriend5(friends);

// // ES6
// Person.prototype.myFriend6 = function(friends) {
//   let arr = friends.map(element => {
//     return `${this.name} is friends with ${element}`;
//   });
//   console.log(arr);
// };
// new Person("John").myFriend6(friends);

////////////////////////////////////
// Destructuring

// // ES5
// var john = ["John", 26];
// //var name = john[0];
// //var age = john[1];

// // ES6
// const [name, age] = ["John", 26];
// console.log(name);
// console.log(age);

// const obj = {
//   firstName: "John",
//   lastName: "Smith"
// };

// const { firstName, lastName } = obj;

// console.log(firstName);
// console.log(lastName);

// const { firstName: a, lastName: b } = obj;
// console.log(a);
// console.log(b);

// function calAgeRetirement(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }

// const [age2, retirement] = calAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);

////////////////////////////////////
// Arrays
const boxes = document.querySelectorAll(".box");

// ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);

// boxesArr5.forEach(function(item) {
//   item.style.backgroundColor = "dodgerblue";
// });

// ES5
// for (var i = 0; i < boxesArr5.length; i++) {
//   if (boxesArr5[i].className === "box blue") {
//     //   continue;
//     break;
//   }

//   boxesArr5[i].textContent = "I change to blue !";
// }

// var ages = [12, 17, 8, 21, 14, 11];
// var full = ages.map(function(item) {
//   return item >= 18;
// });

// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(element => {
  element.style.backgroundColor = "dodgerblue";
});

for (const element of boxesArr6) {
  if (element.className.includes("box blue")) {
    continue;
  }
  element.textContent = "I changed to blue !";
}

const ages = [12, 17, 8, 21, 14, 11];
let index = ages.findIndex(cur => cur >= 18);
console.log(index);
console.log(ages.find(cur => cur >= 18));
