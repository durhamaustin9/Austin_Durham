$(document).ready(function()  {
  
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    
    if(scroll >= 400) {
      document.getElementById("innerNavbar").style.position = "fixed";
      document.getElementById("innerNavbar").style.marginTop = 0;
    }
    
    if(scroll < 400)  {
      document.getElementById("innerNavbar").style.position = "absolute";
      document.getElementById("innerNavbar").style.marginTop = 400;
      
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