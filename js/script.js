// Gainsight PX Tag
var config = {  
    // query parameter filters example    
    namedParamFilter : ["sUrvey"],    
    nameParamFilterType : "mask"};
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-C80IAPOQUD9F-2-1",config);

/* (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-C80IAPOQUD9F-2",{
    filterUrls:['*'],
    filterType:'exclude',
}); */

const pxuser8 = {
    lang: "fr-FR",
    acctid: "3241-5674-8243",
    acctname: "Software Maker Inc."
}

function login() {
        const loginForm = document.getElementById("login-form");
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
        //aptrinsic('set', 'globalContext', {"subuser":"Gainsight"});
        //aptrinsic('remove', 'globalContext', ["subuser"]);
        if (uEmail === "rschlette@gainsight.com" && uPassword === "px") {
            aptrinsic("identify",
            {
            //User Fields
                "id": userId, // Required for logged in app users
                "email": uEmail,
                "lang": "fr-FR",
                "continent":"test_val"
            },
            {
            //Account Fields
                "id":acctId.acct1, //Required
                "name":acctName.acct1
            });
            setTimeout(() => { window.location.href="index.html"; }, 1000);
        }
        else if (uEmail === "pxuser1@example.com" && uPassword === "px") {
            aptrinsic("identify",
            {
            //User Fields
                "id": userId, // Required for logged in app users
                "email": uEmail,
                "lang": "hi-IN",
                "firstName":"New First",
                "lastName":"New Last",
                "ExpireDate":1734299743
            },
            {
            //Account Fields
                "id":acctId.acct2, //Required
                "name":acctName.acct2
            });
            setTimeout(() => { window.location.href="index.html"; }, 1000);
        } 
        else if (uEmail === "pxuser2@example.com" && uPassword === "px") {
            aptrinsic("identify",
            {
            //User Fields
                "id": userId, // Required for logged in app users
                "email": uEmail,
                "signUpDate":1662144328,
                "ExpireDate":1671573879
            },
            {
            //Account Fields
                "id":acctId.acct3, //Required
                "name":acctName.acct3
            });
            setTimeout(() => { window.location.href="index.html"; }, 1000);
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
            setTimeout(() => { window.location.href="index.html"; }, 1000);
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
                "id":"changedAcctID",
                "name":"changedAcctName"
                /* "id":acctId.acct2, //Required
                "name":acctName.acct2 */
            });
            setTimeout(() => { window.location.href="index.html"; }, 1000);
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
            setTimeout(() => { window.location.href="index.html"; }, 1000);
        } 
        else if (uEmail === "pxuser6@example.com" && uPassword === "px") {
            aptrinsic("identify",
            {
            //User Fields
                "id": userId, // Required for logged in app users
                "email": uEmail,
                "lang": "de-DE"
            },
            {
            //Account Fields
                "id":"34v6", //Required
                "name":"Revived Co"
            });
            setTimeout(() => { window.location.href="index.html"; }, 1000);
        }
        else if (uEmail === "pxuser7@example.com" && uPassword === "px") {
            aptrinsic("identify",
            {
            //User Fields
                "id": userId, // Required for logged in app users
                "email": uEmail,
            },
            {
            //Account Fields
                "id":"kwcburt", //Required
                "name":"Terra Markets"
            });
            setTimeout(() => { window.location.href="index.html"; }, 1000);
        }
        else if (uEmail === "pxuser9@example.com" && uPassword === "px") {
            aptrinsic("identify",
            {
            //User Fields
                "id": "createdByApi_nov7", // Required for logged in app users
                "email": uEmail
                        },
            {
            //Account Fields
                "id":pxuser8.acctid, //Require
                "name":pxuser8.acctname            
            });
            setTimeout(() => { window.location.href="index.html"; }, 1000);
            document.cookie = 'account='+pxuser8.acctname+';Domain=.gs-px-l1-rs.github.io; path=/';
        }
        else if (uEmail === "bmc@example.com" && uPassword === "px") {
            aptrinsic("identify",
            {
            //User Fields
                "id": "BMC User", // Required for logged in app users
                "email": uEmail
                        },
            {
            //Account Fields
                "id":"bmc software, inc.", //Require
                "name":"BMC"            
            });
            setTimeout(() => { window.location.href="index.html"; }, 1000);
            document.cookie = 'account='+pxuser8.acctname+';Domain=.gs-px-l1-rs.github.io; path=/';
        }
        else if (uEmail === "date@example.com" && uPassword === "px") {
            aptrinsic("identify",
            {
            //User Fields
                "id": "dateAsString", // Required for logged in app users
                "email": uEmail,
                "ExpireDate":""
                        },
            {
            //Account Fields
                "id":"kib6ceriuwe", //Require
                "name":"dateAsString, inc."            
            });
            setTimeout(() => { window.location.href="index.html"; }, 1000);
        }
        else {
            alert('Invalid username or password');
        }
        document.cookie = 'username='+uEmail+';Domain=.gs-px-l1-rs.github.io; path=/';

}

function showHint(){
    const hint = "pxuser<n>@example.com, px";
    alert(hint);
  }

function logout() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    document.cookie = 'username=; Domain=.gs-px-l1-rs.github.io; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'account=; Domain=.gs-px-l1-rs.github.io; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.aptrinsic('reset');
    counter = 0;
    setTimeout(() => { window.location.href="login.html"; }, 500);
}

function killSession(){
    document.cookie = 'apt.sid=; Domain=.gs-px-l1-rs.github.io; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'account=; Domain=.gs-px-l1-rs.github.io; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

  function calculateDonut() {
    "use strict";
    if (isNaN(document.bun.count.value)) {
        var msg = "Please enter a valid number"; 
        alert(msg);
        aptrinsic('track', 'Error', {"type": "NaN"});
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

 function reIdentify(){
    aptrinsic("identify",
            {
            //User Fields
                "id": userId, // Required for logged in app users
                "email": uEmail,
            },
            {
            //Account Fields
                "id":"alt_acct_id01", //Required
                "name":"Alt Account"
            });
 }