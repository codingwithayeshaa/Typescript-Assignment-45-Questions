// Define a function to print each magician name from an array

function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name))
}

// Define an array containing magicians names
let magician_names = ["Tony","HarryPotter","Ellen"]

// Calling function
show_magicians(magician_names);
