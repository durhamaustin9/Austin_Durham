$(document).ready(function() {
  var color 
  
  $( ".tablinks" ).click(function() {
    
    $( ".tablinks" ).css("background-color","#ffffff"); //Unselected tab background color
    var openthis = $(this).attr('id');  //id atribute selector

    $(this).css("background-color","#cccccc");  //Selected tab background color
    $(".tabcontent").css("display","none");
    $(".tabcontent#" + openthis).fadeIn("slow");
  }); //Controls tab buttons

  $( ".tablinks" ).ready(function() {
    $("#freshmen").click();
  }); //Displays freshmen tab automatically
  
  $( ".tablinks" ).hover(function()  {
    var selector = $(this).attr('id');
    
    if ($(".tabcontent#" + selector).css("display") != ("block"))  {
      $(this).css("background-color","#cccccc");
    }
  }); //Controls mouse hover affect
  
  $( ".tablinks" ).mouseleave(function() {
    var selector = $(this).attr('id');
    
    if ($(".tabcontent#" + selector).css("display") != ("block"))  { 
      $(this).css("background-color","#ffffff");
    }      
  }); //add on to the mouse hover affect
});