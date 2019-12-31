$(document).ready(function() {
  let gpaValue = 0;

  let Animation = setInterval(gpaAnimate, 10);

  function gpaAnimate() {
    document.getElementById('progressAnimate').style.width = gpaValue + '%';

    gpaValue = gpaValue + .5;

    let gpa = document.getElementById('progressAnimate').style.width;

    if (parseInt(gpa) >= 67.5) {
      clearInterval(Animation);

      $('.progress-bar-number').fadeIn("slow");
    }
  }

  $('.centerSplit').animate({
    opacity: '.5'
  }, {
    duration: 3000
  });

  $('.underline').animate({
    opacity: '1'
  },  {
    duration: 3000
  })
});