$(document).ready(function () {
    $("#login-form-submit").click(function (event){
        event.preventDefault();
        const email = $("#email").val();
        const pass = $("#password").val();

        // const userInfo = localStorage.getItem("UserInfo");
        const userInfo = {email: "test", password: "test"}

        if(userInfo){
            if(userInfo.email === email && userInfo.password === pass)
                alert(`Login Successful !\nEmail: ${email}`);
            else
                alert("Incorrect Credentials")
        }else{
            window.location.href = "Register.html";
        }
        
    })



    $("#register-btn").click(function (event){
        event.preventDefault();

        const name = $("#name").val();
        const email = $("#email").val();
        const username = $("#username").val();
        const password = $("#password").val();
        const date = $("#date").val();
        const gender = $("input[name=gender]");
        const city = $("#city").val();

        const UserInfo = {name, email, username, password, date, gender, city};

        localStorage.setItem("UserInfo", UserInfo);
        console.log(UserInfo);

        alert("Registration Successful !");

        window.location.href = "RegistrationInformation.html";

    })


})


