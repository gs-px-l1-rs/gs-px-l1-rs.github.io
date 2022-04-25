// Gainsight PX Tag
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-C80IAPOQUD9F-2");

//login / logout
function login() {
    const loginForm = document.getElementById("login-form");
    const uEmail = loginForm.username.value;
    const uPassword = loginForm.password.value;
    //const userId = uEmail.substr(3,5);
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
    if(uEmail!=""){
        if(uEmail=="rschlette@gainsight.com"||uEmail=="pxuser1@example.com"||uEmail=="pxuser2@example.com"||uEmail=="pxuser3@example.com"||uEmail=="pxuser3@example"||uEmail=="pxuser5@example"){
            const userId = uEmail.substr(3,5);
    
    
    if (uEmail === "rschlette@gainsight.com" && uPassword === "px") {
        aptrinsic("identify",
        {
        //User Fields
            "id": userId, // Required for logged in app users
            "email": uEmail,
            "PaidUser": true
        },
        {
        //Account Fields
            "id":acctId.acct1, //Required
            "name":acctName.acct1
        });
        //window.location.href="index.html";
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
        //window.location.href="index.html";
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
        //window.location.href="index.html";
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
        //window.location.href="index.html";
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

        //window.location.href="index.html";
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
        //window.location.href="index.html";
    } 
    else {
        alert('Invalid username or password');
    }

    window.location.href="index.html";
}
    //document.cookie = 'username='+uEmail+';Domain=.gs-px-l1-rs.github.io; path=/';
}
}
function logout() {
    /* document.cookie = 'apt.uid=; Domain=.gs-px-l1-rs.github.io; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'apt.sid=; Domain=.gs-px-l1-rs.github.io; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'username=; Domain=.gs-px-l1-rs.github.io; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'; */
    window.aptrinsic('reset');
    counter = 0;
    //window.location.href="login.html";
  }

  function showHint(){
    const hint = "pxuser<n>@example.com, px";
    alert(hint);
  }

  //recipe
  function calculateDonut() {
    "use strict";
    if (isNaN(document.bun.count.value)) {
        var msg = "Please enter a valid number"; 
        alert(msg);
        return false;
    }
    else {
        var flour = document.bun.count.value * 50;
        var water = flour * 0.60 ;
        var oil = flour * 0.14;
        var sugar = flour * 0.15;
        var salt = flour * 0.02;
        var yeast = flour * 0.03;
        
        document.bun.base.value = round(flour)+ ' g';
        document.bun.water.value = round(water)+ ' g';
        document.bun.oil.value = round(oil)+ ' g';
        document.bun.sugar.value = round(sugar)+ ' g';
        document.bun.salt.value = round(salt)+ ' g';
        document.bun.yeast.value = round(yeast)+ ' g';

        aptrinsic('track', 'Recipe Size', {"count": parseInt(document.bun.count.value)}); 
        }
}

function round(x) {
    return Math.round(x*10)/10;
  }