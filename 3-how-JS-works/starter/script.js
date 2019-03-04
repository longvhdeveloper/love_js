///////////////////////////////////////
// Lecture: Hoisting

// caculateAge(1989);

// // functions
// function caculateAge(year) {
//   console.log(2018 - year);
// }

// //retirement(1989);

// var retirement = function(year) {
//   console.log(65 - (2018 - year));
// };

// // variables
// console.log(age);
// var age = 29;
// console.log(age);

// function foo() {
//   console.log(age);
//   var age = 65;
//   console.log(age);
// }

// foo();
// console.log(age);

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

// var a = "Hello!";
// first();

// function first() {
//   var b = "Hi!";
//   second();

//   function second() {
//     var c = "Hey!";
//     console.log(a + b + c);
//   }
// }

// Example to show the differece between execution stack and scope chain

// var a = "Hello!";
// first();

// function first() {
//   var b = "Hi!";
//   second();

//   function second() {
//     var c = "Hey!";
//     third();
//   }
// }

// function third() {
//   var d = "John";
//   console.log(a + d);
// }

///////////////////////////////////////
// Lecture: The this keyword
console.log(this);

caculateAge(1989);

function caculateAge(year) {
  console.log(2018 - year);
  console.log(this);
}

var john = {
  name: "John",
  yearOfBirth: 1989,
  caculateAge: function() {
    console.log(this);
    console.log(2018 - this.yearOfBirth);

    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
};

john.caculateAge();

var mike = {
  name: "Mike ",
  yearOfBirth: 1990
};

// Borrow function in object
mike.caculateAge = john.caculateAge;

mike.caculateAge();
