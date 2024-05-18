// Define a dunction with a rest parameter that accepts items reprersenting a Sandwich.
function makeSandwich(...items:string[]){
    console.log("\n Making a Sandwich with the following items:\n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\n Now enjoy your Sandwich\n");
}

// calling function three times with three different arguments
makeSandwich("Chicken","Cheese","Mayo","Ketchup");
makeSandwich("Beef","Coleslaw","Mayo","Egg");
makeSandwich("Egg","Mayo","Coleslaw");

