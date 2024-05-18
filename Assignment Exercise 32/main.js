// Array of current users
var current_Users = ["ALI", "Ahmed", "Kashaf", "Umer", "AbuBakar"];
// Array of new users
var new_Users = ["Usman", "Hadi", "Muhammad", "Ali", "Umer"];
// Loop through new_users to  check for username availability
new_Users.forEach(function (one_newuser) {
    // Making a condition for usernasme already existed and save in our condition variable
    var conditions = current_Users.some(function (one_currentuser) { return one_currentuser.toLowerCase() === one_newuser.toLowerCase(); });
    // Print different messages using if else conditions
    if (conditions) {
        console.log("Sorry ".concat(one_newuser, " is already taken!"));
    }
    else {
        console.log("This username ".concat(one_newuser, " is available."));
    }
});
