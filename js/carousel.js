// Carousel

var slideNumber = 1;
var t;
var timedelay = 2000;

window.onload = function() {
  showSlides(slideNumber);
  carousel();
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].className += " active";
}

function carousel() {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slideNumber++;

  if (slideNumber > slides.length) {slideNumber = 1}

  slides[slideNumber-1].style.display = "grid";
  dots[slideNumber-1].className += " active";
  t = setTimeout(carousel, timedelay);
}

function pauseCarousel() {
  clearTimeout(t)
}

function startCarousel() {
  t = setTimeout(carousel, timedelay);
}
