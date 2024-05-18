// Define a dunction with a rest parameter that accepts items reprersenting a Sandwich.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a Sandwich with the following items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now enjoy your Sandwich\n");
}
// calling function three times with three different arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Ketchup");
makeSandwich("Beef", "Coleslaw", "Mayo", "Egg");
makeSandwich("Egg", "Mayo", "Coleslaw");
