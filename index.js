const readlineSync = require("readline-sync");

let userAge = readlineSync.question("What is your age? ");
console.log("Your age is ", userAge);

(userGender = ["Male", "Female", "Don't want to say"]),
  (index = readlineSync.keyInSelect(userGender, "What is your gender?"));
console.log("Your gender is: " + userGender[index]);

const userActivityOptions = [
  "Sedentary",
  "Moderately Active",
  "Active",
  "Very Active",
];
console.log(userActivityOptions);

const activityChoice = readlineSync.keyInSelect(
  userActivityOptions,
  "What is your activity level?"
);

console.log(activityChoice);

const userActivity = userActivityOptions[activityChoice];
console.log(userActivity);
console.log("Your activity level is: " + userActivityOptions[activityChoice]);

let weightInKg = readlineSync.questionInt("What is your weight? ");
console.log("Your weight is ", weightInKg);

let heightInCm = readlineSync.questionFloat("What is your height? ");
console.log("Your height is ", heightInCm);

let bmr = 10 * weightInKg + 6.25 * heightInCm + 5 * userAge + 5;
console.log("Your BMR is", bmr);

console.log(
  "Logic Correct?",
  userActivity,
  "Active",
  userActivity === "Active"
);

let totalCalories;

if (userActivity == "Sedentary") {
  totalCalories = bmr + 100;
  console.log(bmr);
} else if (userActivity == "Moderately Active") {
  totalCalories = bmr + 300;
  console.log("Check", userActivity);
} else if (userActivity == "Active") {
  totalCalories = bmr + 500;
  console.log("Check", userActivity);
} else if (("Check", userActivity == "Very Active")) {
  totalCalories = bmr + 700;
}
console.log("Your total calories:", totalCalories);

console.log(`
  ~~~~ Overview ~~~~
  Your BMR: ${bmr}
  Your active state: ${userActivity}
  Your total calories: ${totalCalories}
~~~~ Overview ~~~~
`);
