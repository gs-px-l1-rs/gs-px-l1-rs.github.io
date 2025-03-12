  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-UWIOTNCPHAJU-2",{"iframeModeEnabled":false, "allowCrossDomain":true, "fullDomainCookie":true});

function idUser(){
  aptrinsic('identify', {id: '4440a247be37c94c0e8bfbc613d3ba7b'});
}

  function logout() {
    window.aptrinsic('reset');
    setTimeout(() => { window.location.href="login.html"; }, 500);
}
// 3JBWPZMJAMBI