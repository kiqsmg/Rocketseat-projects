/*
let variable1 = prompt("Enter the first variable:");


if (!isNaN(variable1)) {
    console.log("The input is a number.");
  } else {
    console.log("The input is not a number.");
  }





*/

let variable1 = prompt("Enter the first variable:");


if (typeof variable1 === 'string' || variable1 instanceof String) {
    console.log("The input is not a string");
  } else {
    console.log("The input could be a string");
}
