// Gainsight PX Tag
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-C80IAPOQUD9F-2");

//login / logout
function login() {
    var loginForm = document.getElementById("login-form");
    var uEmail = loginForm.username.value;
    var uPassword = loginForm.password.value;
    const acctName = {
        acct1: "ABC Company",
        acct2: "DEF Inc.",
        acct3: "GHI LLC",
        acct4: "JKL Limited"
    }
    
    if(uEmail!=""){
        if((uEmail=="rschlette@gainsight.com" || uEmail=="pxuser1@example.com" || uEmail=="pxuser2@example.com"||uEmail=="pxuser3@example.com" || uEmail=="pxuser4@example.com" || uEmail=="pxuser5@example.com")&& uPassword=="px" )
        {
            b = uEmail.substr(3, 5);
            var id = b;
//               var attrib_value= document.getElementById("myCheck").checked;
            if (uEmail=="rschlette@gainsight.com") {
                    aptrinsic('identify', {
                            //User Fields
                            "id": id, // Required for logged in app users
                            "email": uEmail,
                            "gender": "male",
                        },

                        {
                            //Account Fields
                            "id":acctName.acct1, //Required
                            "name":acctName.acct1,
                        },
                        
                        );
                }  else {
                    alert("not a valid user");
                }

            alert("Logged in user id :" + b);
            //window.open("/HTML/home.html");
            window.location.href="index.html";
      
            return false;

        }
        else
        {
            alert("login failed");
        }
    }
        else{
            alert("enter valid creds");
        }


}

function logout() {
    window.aptrinsic('reset');
    counter = 0;
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