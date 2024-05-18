// Define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an array containing magicians names
var magician_names = ["Tony", "HarryPotter", "Ellen"];
// Calling function
show_magicians(magician_names);
