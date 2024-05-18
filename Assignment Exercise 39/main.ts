// Creating a function with parameter which return the value in string
function city_country(city:string,country:string):string{
    return `${city} , ${country}`;
}

// Calling the function and print the return value
// city_country("Berlin","Germany");
// city_country("Istanbul","Turkey");
// city_country("London","United Kingdom");

console.log(city_country("Berlin","Germany"));
console.log(city_country("Istanbul","Turkey"));
console.log(city_country("Seoul","South Korea"));
