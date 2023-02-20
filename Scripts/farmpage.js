$(window).scroll(function () {
    var position = window.pageYOffset;
    $('.section').each(function () {
      var target = $(this).offset().top;
      var id = $(this).attr('id');
      var navLinks = $('.sidenav a');
      if (position >= target - screen.height/2) {
        navLinks.removeClass('current');
        $('.sidenav a[href="#' + id + '"]').addClass('current');
      }
    });
 });

 $(document).ready(function(){
    $('.sidenav a').click(function(){
        var navLinks = $('.sidenav a');
        console.log("hello");
        navLinks.removeClass('current');
        $(this).addClass('current');
     });
 });

