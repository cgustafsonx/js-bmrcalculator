const readlineSync = require("readline-sync");

let userAge = readlineSync.question("What is your age? ");
console.log("Your age is ", userAge);

const userGender = ["Male", "Female", "Don't want to say"];
const index = readlineSync.keyInSelect(userGender, "What is your gender?");
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
const userActivity = userActivityOptions[activityChoice];
console.log("Your activity level is: " + userActivity);

let weightInKg = readlineSync.questionInt("What is your weight? ");
console.log("Your weight is ", weightInKg);

let heightInCm = readlineSync.questionFloat("What is your height in cm? ");
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
} else if (userActivity == "Moderately Active") {
  totalCalories = bmr + 300;
} else if (userActivity == "Active") {
  totalCalories = bmr + 500;
} else if (userActivity == "Very Active") {
  totalCalories = bmr + 700;
}
console.log("Your total calories:", totalCalories);

console.log(`
  ~~~~ Overview ~~~~
  Your BMR: ${bmr}
  Your activity level: ${userActivity}
  Your total calories: ${totalCalories}
  ~~~~ Overview ~~~~
`);
