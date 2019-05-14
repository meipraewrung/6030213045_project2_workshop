$("#login").click(function () {
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;
    console.log(email, pwd);
    if (email == 'admin@nw.com' && pwd == '12345**') {
        var cf = confirm("Are you sure?");
        if (cf == true) {
            window.location = "about.html";
        }
    }else{
        if (email == "" && pwd == "") {
            alert("Please enter eamil and password");
            return false;
        } else if (pwd == "") {
            alert("Please enter a password");
            return false;
        } else if (email == "") {
            alert("Please enter a email");
            return false;
        } else if (!(email == "" && pwd == "")) {
            alert("Email Or Password Error");
            return false;
        }
    }
});
