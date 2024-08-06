// script.js
var inputSlider = document.getElementById("inputSlider");
var sliderValue = document.getElementById("sliderValue");
var passbox = document.getElementById("passbox");
var lowercase = document.getElementById("lowercase");
var uppercase = document.getElementById("uppercase");
var numbers = document.getElementById("numbers");
var symbols = document.getElementById("symbols");

// Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});

function generatePassword() {
    var length = inputSlider.value;
    var includeLowercase = lowercase.checked;
    var includeUppercase = uppercase.checked;
    var includeNumbers = numbers.checked;
    var includeSymbols = symbols.checked;

    var password = generatePasswordHelper(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    passbox.value = password;
}

function generatePasswordHelper(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()_+[]{}|;:',.<>?";

    var allChars = "";
    if (includeLowercase) {
        allChars += lowercaseChars;
    }
    if (includeUppercase) {
        allChars += uppercaseChars;
    }
    if (includeNumbers) {
        allChars += numberChars;
    }
    if (includeSymbols) {
        allChars += symbolChars;
    }

    if (allChars === "") {
        alert("Please select at least one character type.");
        return "";
    }
    
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    return password;
}
