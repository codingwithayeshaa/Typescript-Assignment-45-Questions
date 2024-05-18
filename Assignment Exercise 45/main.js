// Define a function to create a car object with optional option
function car_object(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initialize a car object with manufacturer and model
    var car = {
        manufacture: manufacture,
        model: model
    };
    // Add additional options to car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call the function to create a car object
var my_car = car_object("Toyota", "Corolla", "Colour:White", "Sunroof:True", "Year:2015");
// Print the variable to ensure all the info stored in a car object
console.log(my_car);
