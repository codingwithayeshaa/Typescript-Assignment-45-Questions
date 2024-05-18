// Define a function to print each magician name from an array
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name))
}

// functions to  modified magicians names
function make_great(magician:string[]){
   return magician.map(name => `The Great ${name}`);
}

// Define an array containing magicians names
let magician_names = ["Tony","HarryPotter","Ellen"];

// Making a copy of magician_names array by using slice() function
let copy_magicianNames = magician_names.slice()

// Modified the copied array to include "The Great"to their names
let copy_greatmagicians = make_great(copy_magicianNames);

// Show both arrays
// Original array

console.log("\n Original Array\n")
show_magicians(magician_names);

// Copied array

console.log("\n Copied Array\n")
show_magicians(copy_greatmagicians);
