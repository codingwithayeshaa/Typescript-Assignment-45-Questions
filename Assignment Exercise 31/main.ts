// Making a variable
let userNames = ["Peter","Fedrick","Rose","Addy","Aara"];

userNames = [];

if(userNames.length === 0){
     console.log("\n Your Array is empty!We need to find some Users.")
}
else{
    userNames.forEach(oneUser => {
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser},Would you like to see a status report?`)
        }
        else{
            console.log(`Hello ${oneUser},Thankyou for logging in again.`)
        }
    })
}

