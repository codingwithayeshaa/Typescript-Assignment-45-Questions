// Making a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with ").concat(printMessage, " prints on shirt."));
}
// Calling a function with by default values
make_shirt();
// Again calling a function with medium size and default message
make_shirt("Medium");
// Again calling a function with any size but different message
make_shirt("Small", "I love Javascript");
