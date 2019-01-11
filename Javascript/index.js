$(document).ready(function()  {
  
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    
    if(scroll >= 400) {
      document.getElementById("Navbar ul").style.position = "fixed";
      document.getElementById("navbar-underly").style.position = "fixed";
    }
    
    if(scroll < 400)  {
      document.getElementById("Navbar").style.position = "absolute";
      document.getElementById("navbar-underly").style.position = "absolute";
    }
    
//    if(scroll <= 400) {
//      $("Navbar").ready(function()  {
//        var margin = document.getElementById("Navbar").css("margin-Top"); 
//        
//        for (document.getElementById("Navbar").css("margin-Top") <= 400;)  {
//          $("Navbar").getElementById.css("marginTop") - $(document).scrollTop();
//        }
//      });
//      
//      document.getElementById("Navbar").marginTop = ()
//    }
  });
  
});