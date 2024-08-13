function GeneratePassword() {
    var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}:|?><,./;'\[]=-0123456789";
    var password = "";
    for (var i = 0; i < 6; i++) {
        var randomNum = Math.floor(Math.random() * char.length);
        password += char[randomNum];
    }
    document.getElementById("password").value = password;
}
