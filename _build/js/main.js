$(document).ready(function() {
  navs();
  head();
  $.localScroll(1000, {offset: 60});

  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger1'
  })
  .setVelocity('.features', {opacity: 1}, {duration: 1000})
  .addTo(controller);

  var end = new ScrollMagic.Scene({
    triggerElement: '#trigger2'
  })
  .setVelocity('.features', {opacity: 0}, {duration: 1000})
  .addTo(controller);

  var caller = new ScrollMagic.Scene({
    triggerElement: '#trigger2'
  })
  .setVelocity('.call', {scale: 1.3}, {duration: 1000})
  .addTo(controller);


  //function getDur(){
    //return $('.features').outerHeight(true);
  //}

  function delayEvent(elem, timeout){
    setTimeout(elem, timeout);
  }

  function cuttyLink(){
      window.location.href = $('#game').attr("href");
  }

  function navs(){
    $('.menu a').velocity('transition.bounceDownIn', {
      stagger: 200
    });
  }

  function head(){
    $('header img').velocity('transition.expandIn', {
      stagger: 800
    });
  }

  //$('.features').velocity({opacity: 0});

  $('.top-line').velocity(
    {opacity: 0}
  )
  .velocity(
    {opacity: 1},
    {duration: 2000});

  $('.call').click(function(e){
    e.preventDefault();
    delayEvent(cuttyLink, 400);
    $('.call').velocity(
      {scale: 1.8},
      {duration: 200}
    )
    .velocity(
      {scale: 0, opacity: 0},
      {duration: 200
      //visibility: "hidden"
    }
    );
  });



});
