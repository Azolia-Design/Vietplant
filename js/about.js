$('.testimonial-slick').each(function(key, item) {

  var sliderIdName = 'slider' + key;
  var sliderNavIdName = 'slider2' + key;

  this.id = sliderIdName;
  $('.customer-slick')[key].id = sliderNavIdName;

  var sliderId = '#' + sliderIdName;
  var sliderNavId = '#' + sliderNavIdName;

  $(sliderId).slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'ease',
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
  });

  $(sliderNavId).slick({
    mobileFirst: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ],
    cssEase: 'ease',
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
});

});
