$(document).ready(function()  {

  $(window).scroll(function() {
    var scroll = $(this).scrollTop();

    if  (scroll < 400)  {

      document.getElementById("innerNavbar").style.position = "absolute";
      document.getElementById("innerNavbar").style.marginTop = "400px";
    }

    if  (scroll >= 400)  {
      document.getElementById("innerNavbar").style.position = "fixed";
      document.getElementById("innerNavbar").style.marginTop = "0";

    }
  });
  
});