let userData;
let dummyUser;

function userDataIds() {
    userData = ["gen", "firstName", "lastName", "address", "addressAdd", "phone", "location", "postCode", "userName", "email", "password", "passwordCheck", "paymentMethode", "ccN", "ccO", "ccED", "ccV", "newsletter"]
}

function dummyUserData() {
    dummyUser =  ["Herr", "Rick", "Carlton", "Bahnhofstrasse", "1", "079 123 45 67", "Zürich", "8000", "SwiftLerner9000", "rick.carlton@gmail.com", "My@Password@Is@Not@Safe@666", "My@Password@Is@Not@Safe@666", "Visa", "1234567890", "Rick Carlton", "12/26", "123", "akzeptiert"
]
}

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.altKey && event.key == 'y') {

        userDataIds(); dummyUserData();

        for(i=0; i<userData.length; i++){

            document.getElementById(userData[i]).value = dummyUser[i];
            document.getElementById("agb").checked = true;
            document.getElementById("newsletter").checked = true;

        }        
    }
});

function clearData(){
    document.getElementById("registrationForm").reset();
    sessionStorage.clear();
}

// fill in data from sessionStorage

userDataIds();

for(i=0; i<userData.length; i++){

let check = sessionStorage.getItem(userData[i])
document.getElementById(userData[i]).value = check;

} 

function checkUserData() {

    if(document.getElementById(userData[i]))

    userDataIds();

    for(i=0; i<userData.length; i++){
    let check = document.getElementById(userData[i]).value;
    sessionStorage.setItem(userData[i], check);
    }    
}
