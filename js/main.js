document.addEventListener("DOMContentLoaded", function () {
  var yourEmail = document.getElementById("email");
  var yourPassword = document.getElementById("password");
  var loginBtn = document.getElementById("loginBtn");
  var validy = document.getElementById("validy");
  var signUp = document.getElementById("signup");



  var details = [];

  function addInfo() {
    isExisted()
    if (validEmail() && validPassword() == true) {
      var infos = {
      
        email: yourEmail.value,
        password: yourPassword.value
      };
    
      details.push(infos);
  localStorage.setItem("allData", JSON.stringify(details));
      validy.innerHTML = `<p class="mt-3 mb-4 text-center text-success">Success</p>`;
      window.location.assign("http://127.0.0.1:5500/week%2012/login.html");
    } else if (validEmail() != true) {
      validy.innerHTML = `<p class="mt-3 mb-4 text-center text-danger">The email is invalid</p>`;
    } else if (validPassword() != true) {
      validy.innerHTML = `<p class="mt-3 mb-4 text-center text-danger">The password is invalid</p>`;
    } else {
      validy.innerHTML = `<p class="mt-3 mb-4 text-center text-danger">All inputs are invalid</p>`;
    }
  }

  signUp.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/week%2012/signup.html";
  });

  loginBtn.addEventListener("click", addInfo);

  function validEmail() {
    var regex = /^\w+@(gmail)\.com$/;
    return regex.test(yourEmail.value);
  }

  function validPassword() {
    var regex = /^.{4,}$/;
    return regex.test(yourPassword.value);
  }

  function clr() {
  
    yourEmail.value = "";
    yourPassword.value = "";
  }


});

function isExisted(email) {
  const storedData = JSON.parse(localStorage.getItem("allData")) || [];
  return storedData.some(user => user.email === email);
}