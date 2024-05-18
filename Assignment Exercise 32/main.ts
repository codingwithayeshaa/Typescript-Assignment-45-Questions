// Array of current users
let current_Users = ["ALI","Ahmed","Kashaf","Umer","AbuBakar"];

// Array of new users
let new_Users = ["Usman","Hadi","Muhammad","Ali","Umer"];

// Loop through new_users to  check for username availability
new_Users.forEach(one_newuser => {

    // Making a condition for usernasme already existed and save in our condition variable
    let conditions = current_Users.some(one_currentuser => one_currentuser.toLowerCase() === one_newuser.toLowerCase())
    
    // Print different messages using if else conditions
    if(conditions){
        console.log(`Sorry ${one_newuser} is already taken!`)
    }
    else{
        console.log(`This username ${one_newuser} is available.`)
    }
})