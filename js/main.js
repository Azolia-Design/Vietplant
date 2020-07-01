
// Preloader
  // Wait for window load
  $(window).load(function() {
  // Animate loader off screen
  setTimeout(function() {$(".se-pre-con").fadeOut("slow");; }, 200)
});

// AOS Animation
  AOS.init();

// Navigator

$(document).ready(function () {
    $("#menu-toggle").click(function () {
        $("nav").toggleClass("padding-bot-30px");
    });
});

$(document).ready(function () {
    $("#menu-toggle").click(function () {
        $("#menu").toggleClass("show");
    });
});

$(document).ready(function () {
    $("#menu-toggle").click(function () {
        $("#submenu-on").toggleClass("show");
    });
});

$(document).ready(function () {
    $("#submenu-toggle").click(function () {
        $("#submenu-on").toggleClass("show");
    });
});

// Navbar-OnScroll

$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);

    if (scrollTop >= 100) {
      $('nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('nav').removeClass('scrolled-nav');
    }

  });

});

// Tabs-Store

function openCity(catName) {
    var i;
    var x = document.getElementsByClassName("cat-tab");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    document.getElementById(catName).style.display = "grid";
}
