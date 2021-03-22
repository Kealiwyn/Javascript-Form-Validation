function validateEmail() {
    var emailInput = document.getElementById("email");

    var errorDiv = document.getElementById("emailError");
    try {
        if (emailInput.value.search("@") === -1 || emailInput.value.lastIndexOf(".") === -1) {
            throw "Please provide a valid email address.";
        }

        emailInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        emailInput.value = emailInput.value.toLowerCase();
        profileemail = emailInput.value;
        document.getElementById("profileEmail").innerHTML = profileemail;
        document.getElementById("profile").style.display = "block";
    }
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        emailInput.style.background = "rgb(255,233,233)";
    }
}

function validateFirstname() {
    var firstname = document.getElementById("fname");
    var errorDiv = document.getElementById("userfirstnameError");
    try {
        if (firstname.value.length < 4) {
            throw "First name must be at least 4 character long";
        }
        firstname.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profilefirstname = firstname.value;
        document.getElementById("profileUsernamef").innerHTML = profilefirstname;
        document.getElementById("profile").style.display = "block";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        firstname.style.background = "rgb(255,233,233)";
    }
}

function validateLastname() {
    var lastname = document.getElementById("lname");
    var errorDiv = document.getElementById("userlastnameError");
    try {
        if (lastname.value.length < 4) {
            throw "lastname must be at least 4 character long";
        }
        lastname.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profilelastname = lastname.value;
        document.getElementById("profileUsernamel").innerHTML = profilelastname;
        document.getElementById("profile").style.display = "block";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        lastname.style.background = "rgb(255,233,233)";
    }
}

function validateAge() {
    var Age = document.getElementById("age");
    var errorDiv = document.getElementById("ageError");
    try {
        if (Age.value < 18) {
            throw "Age must be at least 18 years old";
        }
        Age.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profileAge = Age.value;
        document.getElementById("profileAge").innerHTML = profileAge;
        document.getElementById("profile").style.display = "block";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        Age.style.background = "rgb(255,233,233)";
    }
}

function validateCity() {
    var City = document.getElementById("city");
    var errorDiv = document.getElementById("cityError");
    try {
        if (City.value.length < 4) {
            throw "City must be at least 4 character long";
        }
        City.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profileCity = City.value;
        document.getElementById("profileCity").innerHTML = profileCity;
        document.getElementById("profile").style.display = "block";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        City.style.background = "rgb(255,233,233)";
    }
}

function validateProvince() {
    var Province = document.getElementById("province");
    var errorDiv = document.getElementById("provinceError");
    try {
        if (Province.value !== "QC" || "ON" || "MN" || "SK" || "AB" || "BC") {
            throw "Province must be either QC or ON or MN or SK or AB or BC";
        }
        Province.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profileProvince = Province.value;
        document.getElementById("profileProvince").innerHTML = profileProvince;
        document.getElementById("profile").style.display = "block";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        Province.style.background = "rgb(255,233,233)";
    }
}

function validatePassword() {
    var Pw1 = document.getElementById("password");
    var Pw2 = document.getElementById("confirm");
    var errorDiv = document.getElementById("passwordError");
    try {
        if (Pw1.value.length < 6) {
            throw "Password must be at least 6 character long";
        }
        ///////////////////////////////////////////////////
        /////////////locale compare method////////////////
        /////////////////////////////////////////////////
        else if (Pw1.value.localeCompare(Pw2.value) !== 0) {
            throw "Password must match";
        }
        Pw1.style.background = "";
        Pw2.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profilepassword = Pw1.value;


    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        Pw1.style.background = "rgb(255,233,233)";
        Pw2.style.background = "rgb(255,233,233)";
    }
}

function setUpPages() {
    validateEmail();
    validateFirstname();
    validateLastname();
    validateAge();
    validateCity();
    validateProvince();
    validatePassword();
}
var submit = document.getElementById("submit");
if (submit.addEventListener) {
    submit.addEventListener("click", setUpPages, false);
} else if (submit.attachEvent) {
    submit.attachEvent("onclick", setUpPages);
}