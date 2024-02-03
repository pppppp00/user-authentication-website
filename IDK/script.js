// script.js

const users = [
    { username: 'example', password: 'password' }
];

let score = 0; // Initialize score

function login() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('registrationContainer').style.display = 'none';
        document.getElementById('userInterface').style.display = 'block';
        document.getElementById('loggedInUsername').innerText = username;
    } else {
        alert('Invalid username or password');
    }
}

function logout() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('userInterface').style.display = 'none';
    // You may want to clear any session or token information here.
}

function showRegistrationForm() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('registrationContainer').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('registrationContainer').style.display = 'none';
}

function register() {
    var newUsername = document.getElementById('registerUsername').value;
    var newPassword = document.getElementById('registerPassword').value;

    const existingUser = users.find(u => u.username === newUsername);

    if (existingUser) {
        alert('Username already exists. Please choose a different one.');
    } else {
        users.push({ username: newUsername, password: newPassword });
        alert('Account created for ' + newUsername);
        showLoginForm();
    }
}

function clicker() {
    score += 1;
    document.getElementById('totalScore').innerText = score;
}
