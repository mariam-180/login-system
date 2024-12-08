
var yourEmail = document.getElementById("email");
var yourPassword = document.getElementById("password");
var loginBtn = document.getElementById("loginBtn");
var validy = document.getElementById("validy");
var yourName = document.getElementById("name");
var signIn = document.getElementById("signin");
 
var details=[];


function addInfo() {
    if (validEmail() && validPassword() && validName()==true) {
        var infos = {
            userName: yourName.value,
            email: yourEmail.value,
            password: yourPassword.value
        };

        
        details.push(infos);

       
        localStorage.setItem("allData", JSON.stringify(details));

 
        validy.innerHTML = `
            <p class="mt-3 mb-4 text-center text-success" id="validy">Success</p>
        `;
        clr();
    } else {
     
        if (!validName()) {
            validy.innerHTML = `
                <p class="mt-3 mb-4 text-center text-danger" id="validy">The name is invalid</p>
            `;
        } else if (!validEmail()) {
            validy.innerHTML = `
                <p class="mt-3 mb-4 text-center text-danger" id="validy">The email is invalid</p>
            `;
        } else if (!validPassword()) {
            validy.innerHTML = `
                <p class="mt-3 mb-4 text-center text-danger" id="validy">The password is invalid</p>
            `;
        } else {
            validy.innerHTML = `
                <p class="mt-3 mb-4 text-center text-danger" id="validy">All inputs are invalid</p>
            `;
        }
    }
}


signIn.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/week%2012/#";
});


loginBtn.addEventListener("click", addInfo);


function validEmail() {
    var regex = /^\w+@(gmail)\.com$/;
    return regex.test(yourEmail.value);
}


function validPassword() {
    var regex = /\w[0-9]{0,}/;
    return regex.test(yourPassword.value);
}


function validName() {
    var regex = /^[a-zA-Z]{3,30}$/;
    return regex.test(yourName.value);
}


function clr() {
    yourName.value = "";
    yourEmail.value = "";
    yourPassword.value = "";
}
