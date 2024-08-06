function retrievePassword() {
    const email = document.getElementById("forgot-email").value;
    const firstName = document.getElementById("forgot-firstname").value;
    const lastName = document.getElementById("forgot-lastname").value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.firstname === firstName && storedUser.lastname === lastName) {
        document.getElementById("forgot-success").innerText = `Your password is: ${storedUser.password}`;
        document.getElementById("forgot-error").innerText = '';
    } else {
        document.getElementById("forgot-error").innerText = 'User not found or information does not match.';
        document.getElementById("forgot-success").innerText = '';
    }
}
