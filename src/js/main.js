$(function(){
  $(".main").onepage_scroll({
     sectionContainer: "section",
     easing: "ease-in-out",
     animationTime: 400,
     pagination: true,
     updateURL: true,
     beforeMove: function(index) {
       // console.log('about to move');
     },
     afterMove: function(index) {
       console.log('just moved', index);
     },
     loop: false,
     keyboard: true,
     responsiveFallback: false,
     direction: "vertical"
  });
});
