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

// var years = [1990, 1989, 1969, 1949, 2009];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(age) {
//   return 2018 - age;
// }

// function isFullAge(age) {
//   return age > 18;
// }

// function maxHeartRate(age) {
//   if (age >= 18 && age <= 81) {
//     return Math.round(206.9 - 0.67 * age);
//   }
//   return -1;
// }

// var res = arrayCalc(years, calculateAge);
// console.log(res);
// var fullAges = arrayCalc(res, isFullAge);
// console.log(fullAges);

// var rates = arrayCalc(res, maxHeartRate);
// console.log(rates);

////////////////////////////
// Function returning functions
// function interviewQuestion(job) {
//   if (job === "designer") {
//     return function(name) {
//       console.log(name + " can you please explain what UX design it ?");
//     };
//   } else if (job === "teacher") {
//     return function(name) {
//       console.log("What subject do you teach, " + name + " ?");
//     };
//   } else {
//     return function(name) {
//       console.log("Hello " + name + ", what do you do ?");
//     };
//   }
// }

// var teacherQuestion = interviewQuestion("teacher");
// teacherQuestion("John");

// var designerQuestion = interviewQuestion("designer");
// designerQuestion("John");

// designerQuestion("Jane");
// designerQuestion("Mark");
// designerQuestion("Mike");

// interviewQuestion("teacher")("Jackie");

////////////////////////////
// IIFE
// Create new scope to hidden variable out scope and safely put variable
// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }

// game();

// (function() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// (function(goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(2);

////////////////////////////
// Closures

// function retirement(retirementAge) {
//   var a = " years left until retirement.";
//   return function(yearOfBirth) {
//     var age = 2018 - yearOfBirth;
//     console.log(retirementAge - age + a);
//   };
// }

// var retirementUS = retirement(66);
// retirementUS(1989);

// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1989);
// retirementIceland(1989);

// function interviewQuestion(job) {
//   return function(name) {
//     if (job === "teacher") {
//       console.log("What subject do you teach, " + name + " ?");
//     } else if (job === "designer") {
//       console.log(name + " can you please explain what UX design it ?");
//     } else {
//       console.log("Hello " + name + ", what do you do ?");
//     }
//   };
// }

// var designerQuestion = interviewQuestion("designer");
// designerQuestion("John");

////////////////////////////
// Bind, call, apply
// var john = {
//   name: "John",
//   age: 29,
//   job: "teacher",
//   presentation: function(style, timeOfDays) {
//     if (style === "formal") {
//       console.log(
//         "Good " +
//           timeOfDays +
//           " Ladies and gentlemen! I'm " +
//           this.name +
//           ", I'm a " +
//           this.age +
//           " and I'm " +
//           this.job
//       );
//     } else if (style === "friendly") {
//       console.log(
//         "Hey! What's up. I'm " +
//           this.name +
//           ", I'm a " +
//           this.age +
//           " and I'm " +
//           this.job
//       );
//     }
//   }
// };

// var emily = {
//   name: "Emily",
//   age: 23,
//   job: "designer"
// };

// john.presentation("formal", "morning");
// john.presentation.call(emily, "friendly", "afternoon");
// john.presentation.apply(emily, ["friendly", "afternoon"]);

// var johnFriendly = john.presentation.bind(john, "formal");
// johnFriendly("afternoon");
// johnFriendly("night");

// var emilyFormal = john.presentation.bind(emily, "formal");
// emilyFormal("afternoon");

// var years = [1990, 1989, 1969, 1949, 2009];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(age) {
//   return 2018 - age;
// }

// function isFullAge(limit, age) {
//   return age > limit;
// }

// var ages = arrayCalc(years, calculateAge);
// var isFullAgeVN = isFullAge.bind(this, 18);

// var ages = arrayCalc(ages, isFullAgeVN);

// console.log(ages);

/////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function() {
  function Question(question, answers, correctAnwer) {
    this.question = question;
    this.answers = answers;
    this.correctAnwer = correctAnwer;
  }

  Question.prototype.display = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + 1 + ". " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(userAnswer) {
    if (userAnswer === this.correctAnwer) {
      console.log("You are correct !");
    } else {
      console.log("You aren't correct !");
    }
  };

  var question1 = new Question(
    "Is Javascript scripting language ?",
    ["No", "Yes"],
    2
  );

  var question2 = new Question(
    "Is NodeJs base Javascript language ?",
    ["Yes", "No"],
    1
  );

  // Always display next question
  while (true) {
    var chooseQuestion = getQuestion();

    // Display question
    chooseQuestion.display();

    // Using prompt to get answer from user
    var userAnswer = prompt("Please enter you answer: ");

    if (userAnswer === "exit") {
      break;
    }

    // Parse user answer to number
    userAnswer = Number.parseInt(userAnswer);

    // Check user answer
    chooseQuestion.checkAnswer(userAnswer);
  }

  /**
   * Get question by random and display question
   */
  function getQuestion() {
    var questions = [question1, question2];

    // Generate random question
    var question = Math.round(Math.random());

    // display question
    var chooseQuestion = questions[question];
    return chooseQuestion;
  }
})();
