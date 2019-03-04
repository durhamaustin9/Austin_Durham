$(document).ready(function()  {

  $(window).scroll(function() {
    var scroll = $(this).scrollTop();

    if  (scroll < 400)  {

      document.getElementById("Navbar").style.position = "absolute";
      document.getElementById("Navbar").style.marginTop = "400px";
    }

    if  (scroll >= 400)  {
      document.getElementById("Navbar").style.position = "fixed";
      document.getElementById("Navbar").style.marginTop = "0";

    }
  });


  
});