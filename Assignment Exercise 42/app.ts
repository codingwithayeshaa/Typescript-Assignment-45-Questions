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

// Calling make_great function to modify names
let great_magicians = make_great(magician_names);

// Calling great_magician that shows modified list of magicians
show_magicians(great_magicians);

