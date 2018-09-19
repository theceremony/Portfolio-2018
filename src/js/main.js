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

  let landingBKGS = ['#f08860','#c1c627','#c627c6','#c6274c','#27c6be'];
  let color = landingBKGS[Math.floor(Math.random() * landingBKGS.length)]
  $('.about').css('background-color',color);
  $('.info').css('color',color);

});
