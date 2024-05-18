// Making a Function
function make_shirt(size:string="Large",printMessage:string="I love Typescript"){
    console.log(`Creating a ${size} shirt with ${printMessage} prints on shirt.`)
}
// Calling a function with by default values
make_shirt();

// Again calling a function with medium size and default message
make_shirt("Medium");

// Again calling a function with any size but different message
make_shirt("Small","I love Javascript");

