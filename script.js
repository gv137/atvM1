const users = [
    { username: "admin", password: "1234" },
    { username: "user", password: "4321" }
];

const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

function validateLogin(username, password) {
    return users.some(user => user.username === username && user.password === password);
}

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (validateLogin(username, password)) {
        errorMessage.textContent = "";
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos!";
    }
});

if (window.location.pathname.includes("index.html") && localStorage.getItem("loggedIn")) {
    window.location.href = "dashboard.html";
}