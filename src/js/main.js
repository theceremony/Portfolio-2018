$(function(){

  let timer = null;
  function show(index){

    if(timer) clearTimeout(timer);

    timer = setTimeout(function(){
      $('section').removeClass('show');
      let section = $($('section')[index])
        section.addClass('show');
    },200)
  }

  $(".main").onepage_scroll({
     sectionContainer: "section",
     easing: "ease-in-out",
     animationTime: 400,
     pagination: true,
     updateURL: false,
     beforeMove: function(index) {
       // console.log('about to move');
     },
     afterMove: function(index) {
       show(index-1);
     },
     loop: false,
     keyboard: true,
     responsiveFallback: false,
     direction: "vertical"
  });

  show(0);
  let landingBKGS = ['#f08860','#c1c627','#c627c6','#c6274c','#27c6be'];
  let color = landingBKGS[Math.floor(Math.random() * landingBKGS.length)]

  $('section').css('background-color',color);
  $('.cutout').css('border-top-color',color);

  $('iframe').mouseover(function(e){
    $(e.currentTarget).addClass('hover');
  })

  $('iframe').mouseout(function(e){
    $(e.currentTarget).removeClass('hover');
  })
});
