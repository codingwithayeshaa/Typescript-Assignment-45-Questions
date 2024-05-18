// Define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// functions to  modified magicians names
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// Define an array containing magicians names
var magician_names = ["Tony", "HarryPotter", "Ellen"];
// Making a copy of magician_names array by using slice() function
var copy_magicianNames = magician_names.slice();
// Modified the copied array to include "The Great"to their names
var copy_greatmagicians = make_great(copy_magicianNames);
// Show both arrays
// Original array
console.log("\n Original Array\n");
show_magicians(magician_names);
// Copied array
console.log("\n Copied Array\n");
show_magicians(copy_greatmagicians);
