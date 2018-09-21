
const onePageScroll = require('./onepagescroll.js');

document.addEventListener("DOMContentLoaded", function() {
  // color choice -->
  let landingBKGS = ['#f08860','#c1c627','#c627c6','#c6274c','#27c6be'];
  let color = landingBKGS[Math.floor(Math.random() * landingBKGS.length)]
  // ---------------------------------------
  let timer = null;
  let sections = document.getElementsByTagName('section');
  let iframes = document.getElementsByTagName('iframe');
  // ---------------------------------------
  for (var i in sections) {
    if(sections[i].style) sections[i].style.backgroundColor = color;
  }
  document.getElementsByClassName('cutout')[0].style.borderTopColor = color;
  // ---------------------------------------
  for (var i in iframes) {
    if(iframes[i].addEventListener){
      iframes[i].addEventListener("mouseover", function(e){
        e.target.classList.add('hover');
      });
      iframes[i].addEventListener("mouseout", function(e){
        e.target.classList.remove('hover');
      });
    }
  }
  // ---------------------------------------
  function show(index){
    if(timer) clearTimeout(timer);
    timer = setTimeout(function(){
      for (var i in sections) {
        if(sections[i].classList)sections[i].classList.remove('show');
      }
      sections[index].classList.add('show');
    },200)
  }

  show(0);
  // ---------------------------------------
  onePageScroll(".main", {
     sectionContainer: "section",
     easing: "ease-in-out",
     animationTime: 400,
     pagination: true,
     updateURL: false,
     afterMove: function(index) { show(index-1);},
     loop: false,
     keyboard: true,
     responsiveFallback: false,
     direction: "vertical"
  });
  // ---------------------------------------
  // Prevents window from moving on touch on newer browsers.
  window.addEventListener('touchmove', function (event) {
    event.preventDefault()
  }, {passive: false})
  // ---------------------------------------
});
