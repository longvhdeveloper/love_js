// /*****************************
//  *  Variables and data types
//  */

// var firstName = "John";
// console.log(firstName);

// var lastName = "Smith";
// var age = 28;

// var fullAge = true;

// console.log(fullAge);

// var job;
// console.log(job);

// job = "teacher";
// console.log(job);

// /*****************************
//  *  Variables and data type coercion
//  */

// var firstName = "John";
// var age = 28;

// // Type coercion
// console.log(firstName + " " + age);

// var job, isMarried;
// job = "teacher";
// isMarried = false;

// console.log(
//   firstName +
//     " is a " +
//     age +
//     " year old, " +
//     job +
//     ". Is he married ? " +
//     isMarried
// );

// // variable mutation
// age = "twenty eight";

// job = "driver";

// console.log(
//   firstName +
//     " is a " +
//     age +
//     " year old, " +
//     job +
//     ". Is he married ? " +
//     isMarried
// );

// var lastName = prompt("What is his last name ?");
// console.log(firstName + " " + lastName);

// /*****************************
//  *  Basic operators
//  */

// var now, yearJohn, yearMark;
// now = 2018;

// ageJohn = 28;
// ageMark = 33;

// // Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
// console.log(yearJohn);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // Logical operators
// var johOlder = ageJohn < ageMark;
// console.log(johOlder);

// // typeof operator
// console.log(typeof johOlder);
// console.log(typeof ageJohn);
// console.log(typeof "Mark is older than John");
// var data;
// console.log(typeof data);

// /*****************************
//  *  Operators precedence
//  */

// var now = 2018;
// var yearOfJohn = 1989;

// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearOfJohn > fullAge;
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearOfJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;

// console.log(average);

// // Multiple assignment
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x);
// console.log(y);

// // More operators
// x *= 2;
// console.log(x);

// x += 10;
// console.log(x);

// x++;
// console.log(x);

// x--;
// console.log(x);
/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/

// var markMass = 60;
// var markHeight = 1.73;

// var johnMass = 65;
// var johnHeight = 1.75;

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);

// console.log("Mark's BMI : " + markBMI);
// console.log("John's BMI : " + johnBMI);

// var isBMIMarkHigherJohn = markBMI > johnBMI;
// console.log("Is Mark's BMI higher than John's ? " + isBMIMarkHigherJohn);

/*****************************
 * If / else statements
 */

// var firstName = "John";
// var civilStatus = "single";

// if (civilStatus === "married") {
//   console.log(firstName + " is married !");
// } else {
//   console.log(firstName + " will hopefully marry soon :)");
// }

// var isMarried = true;
// if (isMarried) {
//   console.log(firstName + " is married !");
// } else {
//   console.log(firstName + " will hopefully marry soon :)");
// }

// var markMass = 60;
// var markHeight = 1.73;

// var johnMass = 65;
// var johnHeight = 1.75;

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);

// console.log("Mark's BMI : " + markBMI);
// console.log("John's BMI : " + johnBMI);

// if (markBMI > johnBMI) {
//   console.log("Mark's BMI higher than John's");
// } else {
//   console.log("John's BMI higher than Mark's");
// }

/*****************************
 * Boolean logic
 */
// var firstName = "John";
// var age = 20;

// if (age < 13) {
//   console.log(firstName + " is a boy.");
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + " is a teenager.");
// } else if (age >= 20 && age < 40) {
//   console.log(firstName + " is a young man.");
// } else {
//   console.log(firstName + " is a man.");
// }

/*****************************
 * The Ternary Operator and Swtich Statements
 */
// var firstName = "John";
// var age = 22;

// // Ternary operators
// age > 18
//   ? console.log(firstName + " drink beer.")
//   : console.log(firstName + " drink juice.");

// var drink = age >= 18 ? "beer" : "juice";
// console.log(firstName + " drink " + drink);

// // Swtich statement
// var job = "cop";
// switch (job) {
//   case "teacher":
//   case "instructor":
//     console.log(firstName + " teacher kids how the code.");
//     break;
//   case "driver":
//     console.log(firstName + " driver uber in Lisbon");
//     break;
//   case "designer":
//     console.log(firstName + " design beautiful websites.");
//     break;
//   default:
//     console.log(firstName + " does something.");
// }

// age = 28;
// switch (true) {
//   case age < 13:
//     console.log(firstName + " is a boy.");
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + " is a teenager.");
//     break;
//   case age >= 20 && age < 40:
//     console.log(firstName + " is a young man.");
//     break;
//   default:
//     onsole.log(firstName + " is a man.");
// }

/*****************************
 * Truthy and Falsy values and equality operators
 */
// falsy values: undefined, null, 0, '', NaN
// Truthy values: NOT falsy value

// var height;
// height = 23;
// if (height || height === 0) {
//   console.log("Variable is defined");
// } else {
//   console.log("Variable has NOT defined");
// }

// // Equality operators
// if (height == "23") {
//   console.log("The == operator does not type coercion !");
// }

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK
*/
// var johnTeamScore = (89 + 120 + 103) / 3;
// var mikeTeamScore = (116 + 96 + 123) / 3;
// var maryTeamScore = (97 + 134 + 105) / 3;

// console.log(johnTeamScore, mikeTeamScore, maryTeamScore);

// if (johnTeamScore > mikeTeamScore) {
//   console.log("John's Team is win with average score: " + johnTeamScore);
// } else if (mikeTeamScore > johnTeamScore) {
//   console.log("Mike's Team is win with average score: " + mikeTeamScore);
// } else {
//   console.log("There is a draw");
// }

// if (johnTeamScore > mikeTeamScore && johnTeamScore > maryTeamScore) {
//   console.log("John's Team is win with average score: " + johnTeamScore);
// } else if (mikeTeamScore > johnTeamScore && mikeTeamScore > maryTeamScore) {
//   console.log("Mike's Team is win with average score: " + mikeTeamScore);
// } else if (maryTeamScore > mikeTeamScore && maryTeamScore > johnTeamScore) {
//   console.log("Mary's Team is win with average score: " + maryTeamScore);
// } else {
//   console.log("There is a draw");
// }

/*****************************
 * Functions
 */
// function calculateAge(birthYear) {
//   var now = 2018;
//   return now - birthYear;
// }

// var ageJohn = calculateAge(1989);
// var ageMike = calculateAge(1978);
// var ageJane = calculateAge(1980);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirment(birthYear, firstName) {
//   var age = calculateAge(birthYear);
//   var retirment = 65 - age;
//   if (retirment > 0) {
//     console.log(firstName + " retires in " + retirment + " years.");
//   } else {
//     console.log(firstName + " is already retired.");
//   }
// }

// yearsUntilRetirment(1980, "John");
// yearsUntilRetirment(1978, "Mike");
// yearsUntilRetirment(1989, "Jane");

/*****************************
 * Function statement and Expressions
 */
// Function declartion
// function whatDoYouDo(job, firstName) {}

// Function expression
// var whatDoYouDo = function(job, firstName) {
//   switch (job) {
//     case "teacher":
//       return firstName + " teachs kids how the code.";
//     case "driver":
//       return firstName + " drive uber in New York";
//     case "designer":
//       return firstName + " design beatiful website";
//     default:
//       return firstName + " do something else";
//   }
// };

// console.log(whatDoYouDo("teacher", "John"));
// console.log(whatDoYouDo("designer", "Jane"));
// console.log(whatDoYouDo("Mark", "retired"));

/*****************************
 * Arrays
 */

// // Initialize new array
// var names = ["John", "Mark", "Jane"];
// var years = new Array(1990, 1969, 1948);

// console.log(names[0]);
// console.log(names.length);

// // Mutate array data
// names[1] = "Ben";
// console.log(names);

// //names[5] = "Marry";
// names[names.length] = "Marry";
// console.log(names);

// // Different  data types
// var john = ["John", "Smith", 1990, "desinger", false];

// john.push("blue");
// john.unshift("Mr.");
// console.log(john);

// john.pop();
// console.log(john);

// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));

// var isDesinger =
//   john.indexOf("desinger") === -1 ? "John is not desinger" : "John is desinger";
// console.log(isDesinger);

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK
*/

// function calculateTips(bill) {
//   var percent;
//   switch (true) {
//     case bill < 50:
//       percent = 20 / 100;
//       break;

//     case bill >= 50 && bill <= 200:
//       percent = 15 / 100;
//       break;

//     default:
//       percent = 10 / 100;
//       break;
//   }

//   return bill * percent;
// }
// var bills = [124, 48, 268];
// var tips = [
//   calculateTips(bills[0]),
//   calculateTips(bills[1]),
//   calculateTips(bills[2])
// ];

// var amounts = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(amounts);

/*****************************
 * Objects and properties
 */

// Object literal
// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1990,
//   family: ["Jane", "Mark", "Bob", "Emily"],
//   job: "teacher",
//   isMarried: false
// };

// console.log(john.firstName);
// console.log(john["lastName"]);
// var x = "birthYear";
// console.log(john[x]);

// john.job = "designer";
// john["isMarried"] = true;

// console.log(john);

// // new Object syntax
// var jane = new Object();
// jane.firstName = "Jane";
// jane.birthYear = 1969;
// jane["lastName"] = "Smith";

// console.log(jane);

/*****************************
 * Objects and method
 */

// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1990,
//   family: ["Jane", "Mark", "Bob", "Emily"],
//   job: "teacher",
//   isMarried: false,
//   calcAge: function() {
//     return 2018 - this.birthYear;
//   }
// };

// john.age = john.calcAge();
// console.log(john);

/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK
*/

// var john = {
//   fullName: "John Smith",
//   height: 1.7,
//   mass: 75,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// var mark = {
//   fullName: "Mark White",
//   height: 1.72,
//   mass: 77,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// john.calcBMI();
// mark.calcBMI();

// if (john.bmi > mark.bmi) {
//   console.log(
//     john.fullName +
//       "'s BMI is " +
//       john.bmi +
//       " greater than " +
//       mark.fullName +
//       "'s BMI is " +
//       mark.bmi
//   );
// } else if (john.bmi < mark.bmi) {
//   console.log(
//     john.fullName +
//       "'s BMI is " +
//       john.bmi +
//       " less than " +
//       mark.fullName +
//       "'s BMI is " +
//       mark.bmi
//   );
// } else {
//   console.log(
//     john.fullName +
//       "'s BMI is " +
//       john.bmi +
//       " same as " +
//       mark.fullName +
//       "'s BMI is " +
//       mark.bmi
//   );
// }

/*****************************
 * Loops and iteration
 */

// for (var i = 1; i < 20; i += 2) {
//   console.log(i);
// }

// // for loop
// var john = ["John", "Smith", 1990, "designer", false];
// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// // while loop
// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// continue and break statement
// var john = ["John", "Smith", 1990, "designer", false];
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") {
//     // continue;
//     break;
//   }
//   console.log(john[i]);
// }

// Looping backwards
// for (var i = john.length - 1; i > -1; i--) {
//   console.log(john[i]);
// }

/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK
*/
var johnFamily = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  amounts: [],
  tipCalc: function() {
    for (var i = 0; i < this.bills.length; i++) {
      var percent;
      if (this.bills[i] < 50) {
        percent = 0.2;
      } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
        percent = 0.15;
      } else {
        percent = 0.1;
      }
      var tip = this.bills[i] * percent;
      this.tips.push(tip);
      this.amounts.push(tip + this.bills[i]);
    }
  }
};

var markFamily = {
  bills: [77, 375, 110, 45],
  tips: [],
  amounts: [],
  tipCalc: function() {
    for (var i = 0; i < this.bills.length; i++) {
      var percent;
      if (this.bills[i] < 100) {
        percent = 0.2;
      } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
        percent = 0.1;
      } else {
        percent = 0.25;
      }
      var tip = this.bills[i] * percent;
      this.tips.push(tip);
      this.amounts.push(tip + this.bills[i]);
    }
  }
};

function calcAverageTips(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  return sum / tips.length;
}

johnFamily.tipCalc();
markFamily.tipCalc();
var johnAverageTips = calcAverageTips(johnFamily.tips);
var markAverageTips = calcAverageTips(markFamily.tips);

if (johnAverageTips > markAverageTips) {
  console.log(
    "Average John's tips is " +
      johnAverageTips +
      " is greater than Average Mark's tips is " +
      markAverageTips
  );
} else if (johnAverageTips < markAverageTips) {
  console.log(
    "Average John's tips is " +
      johnAverageTips +
      " is less than Average Mark's tips is " +
      markAverageTips
  );
} else {
  console.log("It is draw them");
}
