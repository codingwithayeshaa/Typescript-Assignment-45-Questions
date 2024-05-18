var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making an array of countries and print it in it's original order
var countriesToVisit = ["Maldives", "Switzerland", "Bali", "Turkey", "Greece"];
console.log("Original Order", countriesToVisit);
// Print the array in alphabetical order without modifying the original order
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that the array is still in it's original order
console.log("Still in it's Original Order:", countriesToVisit);
//Print the array in Reverse Alphabetical order with the help of reverse built-in function
console.log("Reverse Alphabetical Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show that the array is still in it's original order
console.log("Still in it's Original Order:", countriesToVisit);
//we changed the original array order
console.log("Original Array Reversed:", countriesToVisit.reverse());
// Print the array to show it's back to it's original order
console.log("Back to it's Original order:", countriesToVisit.reverse());
// Print the array to show that it's order has been changed into alphabetical order
console.log("Sorted in Alphabetical Orde:", countriesToVisit.sort());
//we changed the original array order again in reversed order
console.log("Original Array Reversed Again:", countriesToVisit.reverse());
