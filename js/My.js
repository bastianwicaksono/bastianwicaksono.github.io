$('.nav-link').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top - 66
    }, 900);
});

$('.jum-link').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top - 66
    }, 900);
});

var typed = new Typed('#typed_jum' , {
    strings: ['- Human - Web Developer - Programmer -'],
    typeSpeed: 75,
    backSpeed: 50,
    loop: true
});

$( document ).ready(function() {
  new WOW().init();
})
