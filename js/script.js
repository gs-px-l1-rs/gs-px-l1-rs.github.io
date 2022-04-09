// Gainsight PX Tag
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-C80IAPOQUD9F-2");

function logout() {
    alert('Logging Out...');
    document.cookie = 'apt.uid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'apt.sid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href="login.html";
  }