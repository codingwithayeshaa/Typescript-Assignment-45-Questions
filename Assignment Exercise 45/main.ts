// Define a function to create a car object with optional option

function car_object(manufacture,model,...options){
// Initialize a car object with manufacturer and model
    let car = {
        manufacture: manufacture,
        model: model
    };

    // Add additional options to car object
    options.forEach(option => {
        let[key,value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
} 
// Call the function to create a car object
let my_car = car_object("Toyota","Corolla","Colour:White","Sunroof:True","Year:2015");

// Print the variable to ensure all the info stored in a car object

console.log(my_car);
