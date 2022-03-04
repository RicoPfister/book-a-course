let userData;
let dummyUser;

function userDataIds() {
    userData = ["gen", "firstName", "lastName", "address", "addressAdd", "phone", "location", "postCode", "userName", "email", "password", "passwordCheck", "paymentMethode", "ccN", "ccO", "ccED", "ccV", "newsletter"]
}

function dummyUserData() {
    dummyUser =  ["Herr", "Rick", "Carlton", "Bahnhofstrasse", "1", "079 123 45 67", "Zürich", "8000", "W3bN00b9k", "rick.carlton@gmail.com", "My@Pa$$word@Is@Not@Safe@123", "My@Pa$$word@Is@Not@Safe@123", "Visa", "1234567890", "Rick Carlton", "12/26", "123", "akzeptiert"
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

for(i=0; i<userData.length-1; i++){

let check = sessionStorage.getItem(userData[i])
document.getElementById(userData[i]).value = check;

if(sessionStorage.getItem("newsletter") === "akzeptiert"){
document.getElementById("newsletter").checked = true;
} else {document.getElementById("newsletter").checked = false}

}

let valError = "notSet";

// data validation

function checkUserData() {

    userDataIds();

    for(i=0; i<userData.length-1; i++){
		
		// check if field is empty and set warning-label

        if(document.getElementById(userData[i]).value === ""){
        document.getElementById("valID_"+userData[i]).innerHTML  = "Angabe fehlt";
        valError = 1;
		}
		
		// check if agb ist checked and set warning-label

        if(document.getElementById("agb").checked == false){
            document.getElementById("valID_agb").innerHTML  = "Angabe fehlt";
            valError = 1;}
        }
		
		// check if email contains @
		
		let emailCheck = document.getElementById("email").value;
		let emailCheckPattern = /@/;
		
       if(emailCheckPattern.test(emailCheck) === false){
		    document.getElementById("valID_email").innerHTML  = "E-Mail-Adresse ungültig";
            valError = 1;
        }
		
		// check password length		

       if(document.getElementById("password").value.length < 8){
		    document.getElementById("valID_password").innerHTML  = "Mindestens 8 Zeichen";
            valError = 1;
        }			

		
		// check password equality		

       if(document.getElementById("password").value != document.getElementById("passwordCheck").value){
		    document.getElementById("valID_passwordCheck").innerHTML  = "Passwörter ungleich";
            valError = 1;
        }	


        if(valError == 1){
            valError = 0;
            return false;
        }
     
        // write sessionStorage

        for(i=0; i<userData.length; i++){
        let check = document.getElementById(userData[i]).value;
        sessionStorage.setItem(userData[i], check);}

        if (document.getElementById("newsletter").checked == false){
        sessionStorage.setItem("newsletter", "")}    
}

// clear all booking data

function clearInvalid(a){
    document.getElementById("valID_"+a).innerHTML = "";
}

