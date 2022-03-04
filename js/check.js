let sesSto;

function userDataIds() {
    userData = ["gen", "firstName", "lastName", "address", "addressAdd", "location", "postCode", "phone", "userName", "email", "password", "passwordCheck", "paymentMethode", "ccN", "ccO", "ccED", "ccV", "newsletter"]
}

function seSto(a) {
return sessionStorage.getItem(userData[a]);
}

userDataIds();

document.getElementById("name").innerHTML = `${seSto(0)} ${seSto(1)} ${seSto(2)}`;
document.getElementById("address").innerHTML = `${seSto(3)} ${seSto(4)} <br> ${seSto(6)} ${seSto(5)}`;
document.getElementById("phone").innerHTML = `${seSto(7)}`;
document.getElementById("userName").innerHTML = `${seSto(8)}`;
document.getElementById("email").innerHTML = `${seSto(9)}`;
document.getElementById("paymentMethode").innerHTML = `${seSto(12)}`;
document.getElementById("agb").innerHTML = "akzeptiert";

if(`${seSto(17)}` === ""){
    document.getElementById("newsletter").innerHTML = "nicht erwünscht";
} else {
document.getElementById("newsletter").innerHTML = `${seSto(17)}`;
}

function sendData(){
    sessionStorage.clear();
    window.location.href = "course_thankyou.html";
}
