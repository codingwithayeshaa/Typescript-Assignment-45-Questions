// Define Variables
let weather = "winter";
let UpperCase = "WINTER";
let firstNumber = 20;
let secondNumber = 10;
let Fruits = ["Apple","Banana","Kiwi","Mango"];

// Test for equality and inequality with strings
console.log("\nIs weather is equal to winter?");
console.log( weather == "winter");

console.log("\nIs weather is not equal to winter?");
console.log( weather != "winter");

// Test using lowercase function
console.log("\nIs WINTER is equal to winter after converting into lowercase?");
console.log(UpperCase.toLowerCase() == "winter");

console.log("\nIs WINTER is not equal to winter after converting into lowercase?");
console.log( UpperCase.toLowerCase() != "winter");

// Numerical Test
// is equal to
console.log("\nIs FirstNumber is equal to 20?");
console.log(firstNumber == 20);

// not is equal to
console.log("\nIs SecondNumber is not equal to 10?");
console.log(secondNumber != 10);

// greater than
console.log("\nIs 20 is greater than 10?");
console.log(20 > 10);

// less than 
console.log("\nIs 10 is greater than 20?");
console.log(10 > 20);

// greater than and is equal to
console.log("\nIs 10 is grater than or is equal to 0?");
console.log(10 >= 0);

// less than and is equal to
console.log("\nIs 20 is less than or is equal to 10?");
console.log(20 <= 10);

// Test using 'and' and 'or' operators

// Using && (and)
console.log("\nIs 20 is greater than 10 and 20 is equal to 20?");
console.log(20 > 10 && 20 == 20);

// Using || (or)
console.log("\nIs 10 is greater than 20 and 10 is not equal to 10?");
console.log(10 > 20 || 10 != 10 );

// Test if the item is in Array

console.log("\nIs Mango is included in my fruits Array?");
console.log(Fruits.includes("Mango"));

// Test if the item is not in Array

console.log("\nIs Apple is not included in my fruits Array?");
console.log(Fruits.includes("Apple"));














