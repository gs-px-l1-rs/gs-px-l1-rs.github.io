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

loginButton.addEventListener("click", (uclick) => {
    uclick.preventDefault();
    alert("clicked");
    const uEmail = loginForm.username.value;
    const uPassword = loginForm.password.value;
    var userId = uEmail.substr(3,5);
    alert(uEmail+" "+uPassword+" "+userId);
    const acctName = {
        acct1: "ABC Company",
        acct2: "DEF Inc.",
        acct3: "GHI LLC",
        acct4: "JKL Limited"
    }
    const acctId = {
        acct1: "83nd7",
        acct2: "b289d",
        acct3: "8wbd6",
        acct4: "4s6r8"
    }

    if (uEmail === "rschlette@gainsight.com" && uPassword === "px") {
        alert("You have successfully logged in.");
        //passing user and account objects:
        aptrinsic("identify",
        {
        //User Fields
            "id": userId, // Required for logged in app users
            "email": uEmail
        },
        {
        //Account Fields
            "id":acctId.acct1, //Required
            "name":acctName.acct1
        });

        window.location.href="index.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

hintButton.addEventListener("click", (uHint) => {
    uHint.preventDefault();
    const hint = "gainsight/px";
    alert(hint);
})




/*  pre-PX login scheme
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
}) */