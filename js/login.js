const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const hintButton = document.getElementById("hint-button");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "gainsight" && password === "px") {
        //alert("You have successfully logged in.");
        window.location.href="index.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

hintButton.addEventListener("click", (e) => {
    e.preventDefault();
    const hint = "gainsight/px";
    alert(hint);
})