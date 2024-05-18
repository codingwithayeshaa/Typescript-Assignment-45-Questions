var userName = ["Fedrick", "Peter", "Admin", "Georgia", "Ginny"];
// Creating ForEach Loop on array
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",Thankyou for logging in again."));
    }
});
