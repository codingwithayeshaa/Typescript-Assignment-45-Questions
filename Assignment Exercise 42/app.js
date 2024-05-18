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
// Calling make_great function to modify names
var great_magicians = make_great(magician_names);
// Calling great_magician that shows modified list of magicians
show_magicians(great_magicians);
