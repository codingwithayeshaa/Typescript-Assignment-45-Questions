// This program show different types of cases such as uppercase,lowercase and titlecase.
// This program is completed on 5/10/2024.
// This is very interesting task.
var personName = "Kiran Ayesha";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (abcd) { return abcd.toUpperCase(); }));
