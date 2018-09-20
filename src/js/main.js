$(function(){
  function swapColors(index){
    setTimeout(function(){
      let landingBKGS = ['#f08860','#c1c627','#c627c6','#c6274c','#27c6be'];
      let color = landingBKGS[Math.floor(Math.random() * landingBKGS.length)]

      // $('.about').css('background-color',color);
      console.log(index);
      $($('section')[index]).css('background-color',color);
      // let section = $('section');

      // $('.info').css('color',color);
      if(index == 0) $('.cutout').css('border-top-color',color);
    },200)
  }

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
       swapColors(index-1);

     },
     loop: false,
     keyboard: true,
     responsiveFallback: false,
     direction: "vertical"
  });

  swapColors(0);

});
