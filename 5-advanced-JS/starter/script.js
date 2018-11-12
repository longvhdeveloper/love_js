// Function constructor
// var john = {
//   name: "John",
//   yearOfBirth: 1989,
//   job: "developer"
// };

// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   //   this.calculateAge = function() {
//   //     console.log(2018 - this.yearOfBirth);
//   //   };
// };

// Person.prototype.calculateAge = function() {
//   console.log(2018 - this.yearOfBirth);
// };

// Person.prototype.lastName = "Smith";

// var john = new Person("John", 1990, "teacher");

// var jane = new Person("Jane", 1969, "designer");

// var mark = new Person("Mark", 1949, "retired");

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// Object.create
// var personProto = {
//   calculateAge: function() {
//     console.log(2018 - this.yearOfBirth);
//   }
// };

// var john = Object.create(personProto);
// john.name = "John";
// john.yearOfBirth = 1989;
// john.job = "developer";

// var jane = Object.create(personProto, {
//   name: { value: "Jane" },
//   yearOfBirth: { value: 1969 },
//   job: { value: "designer" }
// });

// Primitives vs objects

// Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// // object
// var obj1 = {
//   name: "John",
//   age: 28
// };

// var obj2 = obj1;
// obj1.age = 30;

// console.log(obj1.age);
// console.log(obj2.age);

// // functions
// var age = 27;
// var obj = {
//   name: "John",
//   city: "Lisbon"
// };

// function change(a, b) {
//   a = 30;
//   b.city = "San Fransico";
// }

// change(age, obj);
// console.log(age);
// console.log(obj.city);

////////////////////////////
// Passing function as arguments

var years = [1990, 1989, 1969, 1949, 2009];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(age) {
  return 2018 - age;
}

function isFullAge(age) {
  return age > 18;
}

function maxHeartRate(age) {
  if (age >= 18 && age <= 81) {
    return Math.round(206.9 - 0.67 * age);
  }
  return -1;
}

var res = arrayCalc(years, calculateAge);
console.log(res);
var fullAges = arrayCalc(res, isFullAge);
console.log(fullAges);

var rates = arrayCalc(res, maxHeartRate);
console.log(rates);
