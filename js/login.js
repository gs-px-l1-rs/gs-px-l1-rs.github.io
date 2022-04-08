// Gainsight PX Tag
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-C80IAPOQUD9F-2");

// login elements and event listeners
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