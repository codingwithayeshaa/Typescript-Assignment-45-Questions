var guestsList = ["Amna", "Ali", "Hassan", "Kashaf", "Sabeen", "Umer"];
var cannottCome = guestsList[1];
console.log(cannottCome, "Cannot make it to the party");
guestsList.splice(1, 1, "Bilal");
guestsList.forEach(function (guest) { return console.log("Hello ".concat(guest, ",I would like to invite you on a party.")); });
