// login elements and event listeners
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const hintButton = document.getElementById("hint-button");

loginButton.addEventListener("click", (uclick) => {
    uclick.preventDefault();
    const uEmail = loginForm.username.value;
    const uPassword = loginForm.password.value;
    const userId = uEmail.substr(3,5);
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
    }
    else if (uEmail === "pxuser1@example.com" && uPassword === "px") {
        aptrinsic("identify",
        {
        //User Fields
            "id": userId, // Required for logged in app users
            "email": uEmail
        },
        {
        //Account Fields
            "id":acctId.acct2, //Required
            "name":acctName.acct2
        });
        window.location.href="index.html";
    } 
    else if (uEmail === "pxuser2@example.com" && uPassword === "px") {
        aptrinsic("identify",
        {
        //User Fields
            "id": userId, // Required for logged in app users
            "email": uEmail
        },
        {
        //Account Fields
            "id":acctId.acct3, //Required
            "name":acctName.acct3
        });
        window.location.href="index.html";
    } 
    else if (uEmail === "pxuser3@example.com" && uPassword === "px") {
        aptrinsic("identify",
        {
        //User Fields
            "id": userId, // Required for logged in app users
            "email": uEmail
        },
        {
        //Account Fields
            "id":acctId.acct4, //Required
            "name":acctName.acct4
        });
        window.location.href="index.html";
    } 
    else if (uEmail === "pxuser4@example.com" && uPassword === "px") {
        aptrinsic("identify",
        {
        //User Fields
            "id": userId, // Required for logged in app users
            "email": uEmail
        },
        {
        //Account Fields
            "id":acctId.acct2, //Required
            "name":acctName.acct2
        });

        window.location.href="index.html";
    } 
    else if (uEmail === "pxuser5@example.com" && uPassword === "px") {
        aptrinsic("identify",
        {
        //User Fields
            "id": userId, // Required for logged in app users
            "email": uEmail
        },
        {
        //Account Fields
            "id":acctId.acct4, //Required
            "name":acctName.acct4
        });
        window.location.href="index.html";
    } 
    else {
        loginErrorMsg.style.opacity = 1;
    }
    return;
})

hintButton.addEventListener("click", (uHint) => {
    uHint.preventDefault();
    const hint = "pxuser<n>@example.com/px";
    alert(hint);
})