let userName = ["Fedrick","Peter","Admin","Georgia","Ginny"];

// Creating ForEach Loop on array
userName.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser},Would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${oneUser},Thankyou for logging in again.`)
    }
})