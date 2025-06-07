document.getElementById('facebookLoginButton').addEventListener('click', function() {
    window.location.href = 'https://www.facebook.com/login/';
});

const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const loginButton = document.getElementById('loginButton');

function checkInputs() {
    if (usernameInput.value.length > 0 && passwordInput.value.length > 0) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}

usernameInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    if (!loginButton.disabled) {
        window.location.href = 'success.html';
    }
}); 