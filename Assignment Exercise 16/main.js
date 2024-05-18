// Creating a Guestlist array
//                   0       1       2      3
var guestList = ["Phillip", "Erica", "John", "Lisa"];
//Creating a Guestlist array who can't come
var cannotCome = guestList[1];
//print a message to the guest who can't come
console.log(cannotCome, "cannot make it to the dinner");
// Add or Remove value in a guestlist array
guestList.splice(1, 1, "Rose");
// Print a message for bigger table
console.log("Good news!We have found a bigger dinner table");
// Add a new guest at the starting index of an array
guestList.unshift("Diana");
// Add a new guest at the ending index of an array
guestList.push("Peter");
// Get a middle index of our guest list array
// we use its length function to add a guest in the middle 
// we divide the total length of an array by 2 to get the middle guest
// we use math.floor to divide any number by 2 
var middleIndex = Math.floor(guestList.length / 2);
//Add a new guest in the middle index of an array
guestList.splice(middleIndex, 0, "Monica");
// Print message of updated list
console.log("Updated list of our new Guests:");
// Sending invitation  to each guest one by one with their  names
guestList.forEach(function (guest) { return console.log("Hello ".concat(guest, " Would you like to have dinner with us.")); });
