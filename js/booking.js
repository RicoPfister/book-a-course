let userData;
let dummyUser;

function userDataIds() {
    userData = ["gen", "firstName", "lastName", "address", "addressAdd", "phone", "location", "postCode", "userName", "email", "password", "passwordCheck", "paymentMethode", "ccN", "ccO", "ccED", "ccV", "newsletter"]
}

function dummyUserData() {
    dummyUser =  ["Herr", "Rick", "Carlton", "Bahnhofstrasse", "1", "079 123 45 67", "Zürich", "8000", "W3bN00b9k", "rick.carlton@gmail.com", "My@Password@Is@Not@Safe@666", "My@Password@Is@Not@Safe@666", "Visa", "1234567890", "Rick Carlton", "12/26", "123", "akzeptiert"
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

let valTest;

// data validation

function checkUserData() {

    userDataIds();

    for(i=0; i<17; i++)

    if(document.getElementById(userData[i]).value === ""){
      document.getElementById("valID_"+userData[i]).innerHTML  = "Angabe fehlt";
      valTest = 1;
    }

    if(valTest == 1){
        return false;
    }

    for(i=0; i<userData.length; i++){
    let check = document.getElementById(userData[i]).value;
    sessionStorage.setItem(userData[i], check);
    }    
}

// event listener klick invalid field

function clearInvalid(a){
    document.getElementById("valID_"+a).innerHTML = "";
}
    

