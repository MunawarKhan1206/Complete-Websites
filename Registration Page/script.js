function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if (i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

function storeUser() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (firstname && lastname && email && password) {
        const user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        };
        localStorage.setItem('user', JSON.stringify(user));
        alert("User registered successfully!");
        login();
    } else {
        alert("Please fill all fields.");
    }
}

function validateLogin() {
    const loginInput = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
        const fullName = `${storedUser.firstname} ${storedUser.lastname}`;
        if ((storedUser.email === loginInput || fullName === loginInput) && storedUser.password === password) {
            window.location.href = "content.html";
        } else {
            alert("Invalid login credentials.");
        }
    } else {
        alert("No user found. Please sign up.");
    }
}

// Redirect to forget.html when clicking "Forgot password?"
document.querySelector('.two a').addEventListener('click', function() {
    window.location.href = "forget.html";
});
