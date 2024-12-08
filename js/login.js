var logout=document.getElementById("logout");
logout.addEventListener("click", function() {
    // Redirect to the signup page
    window.location.href = "index.html";});

    var userName=document.querySelector(".username");

    userName.innerHTML = JSON.parse(localStorage.getItem("allData")).userName;