let guestsList = ["Amna","Ali","Hassan","Kashaf","Sabeen","Umer"];

let cannottCome = guestsList [1];

console.log(cannottCome,"Cannot make it to the party");

guestsList.splice(1,1,"Bilal");

guestsList.forEach(guest => console.log(`Hello ${guest},I would like to invite you on a party.`));



