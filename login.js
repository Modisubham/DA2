// Mock user data (insecure - do not use in production)
const users = [
    { email: "user@example.com", password: "password" },
    { email: "another@example.com", password: "123456" }
];

function authenticateLogin() {
const email = document.getElementById("loginEmail").value;
const password = document.getElementById("loginPassword").value;

// Check if there is a user with matching credentials
const user = users.find(u => u.email === email && u.password === password);

if (user) {
alert("Login successful!");

// Redirect to account_Details.html upon successful login
window.location.href = "success.html";
} else {
alert("Login failed. Please check your credentials.");
}
}

function registerUser() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Store the user data (insecure - do not use in production)
    users.push({ email, password });
    alert("Registration successful! You can now login.");
    // Redirect or perform other actions as needed
}

// Your existing code for toggling between login and signup forms
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.addEventListener("click", () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.addEventListener("click", () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    signupBtn.click();
});