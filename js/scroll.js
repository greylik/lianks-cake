$(document).ready(function(){
 
  // hide our element on page load
  $('h1').css('opacity', 0);
 
  $('h1').waypoint(function() {
      $('#element-to-animate').addClass('fadeInLeft');
  }, { offset: '50%' });
 
});