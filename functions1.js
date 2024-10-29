// Task 1: Create a function named `printName` that prints your name on the screen
function printName() {
  console.log("Salem Salman");
}
printName();

// Task 2:
function printAge(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  console.log("Your age is: " + age);
}
printAge(1985);

// Task 3:
function printAgeAndName(birthYear, name) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  console.log("Hello " + name + ", you are " + age + " years old.");
}
printAgeAndName(1985, "ٍSalem");

// Task 4:

function printHello(name, language) {
  if (language === "en") {
    console.log("Hello " + name);
  } else if (language === "es") {
    console.log("Hola " + name);
  } else if (language === "fr") {
    console.log("Bonjour " + name);
  } else if (language === "tr") {
    console.log("Merhaba " + name);
  } else {
    console.log("Language not supported");
  }
}
printHello("Salem", "en");
printHello("Salem", "es");
printHello("Salem", "fr");
printHello("Salem", "tr");

// Task 5:

function printMax(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else if (num2 > num1) {
    console.log(num2);
  } else {
    console.log("Both numbers are equal");
  }
}
printMax(10, 20);
printMax(30, 15);
printMax(25, 25);
