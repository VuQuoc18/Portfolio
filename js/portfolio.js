// Scroll - Menu active
$(document).ready(function () {
$(window).scroll(function(){
        var window_top = $(window).scrollTop() + 12; 
        var div_top = $('#checkdiv').offset().top;
        if (window_top >= div_top) {
                $('nav').addClass('stickydiv');
            } else {
                $('nav').removeClass('stickydiv');
            }
    });  

  $(document).on("scroll", onScroll);

$('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
        $(document).off("scroll");
         $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
         var target = this.hash,
         menu = target;
         $target = $(target);
       $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 600, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.sidebar a').each(function () {
        var currLink = $(this);
       var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.sidebar ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

// Jquery Readmore

$('.overlay').click(function(){
	$(this).parent().next().addClass('showing-up');
	$('.full-overlay').addClass('showing-up');
})

$('.x-button, .full-overlay').click(function(){
	$('.readmore').removeClass('showing-up');
	$('.full-overlay').removeClass('showing-up');
})

// Contact

$(document).ready(function () {
  $('form').submit(function(e) {
    e.preventDefault();
    var mailto_link = 'mailto:' + $('#inputEmail').val() + '?name=' + $('#inputName').val() + '&Messeage=' + $('#inputMesseage').val();
    
    win = window.open(mailto_link, 'emailWindow');
    if (win && win.open && !win.closed) win.close();
  });
});

//menu reponsive
// $('#nav-toggle').click(function() {
//       $('#cssmenu').slideToggle();
//     });
//     // Hamburger to X toggle
//     $('#nav-toggle').on('click', function() {
//       this.classList.toggle('toggle');
//     });

// $(window).on("load, resize", function() {
//     var viewportWidth = $(window).width();
//     if (viewportWidth > 766) {
//       $("#cssmenu").css("display","none");
//       $("#nav-toggle").removeClass("active");
//     }
// });
