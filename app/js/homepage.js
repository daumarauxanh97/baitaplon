var slideIndex = 1;
var autoSlideIndex=0;
showSlides(slideIndex);
AutoSlide();
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function AutoSlide() {
    var i;
    var slides = document.getElementsByClassName("header-image");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    autoSlideIndex++;
    if (autoSlideIndex > slides.length) {autoSlideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[autoSlideIndex-1].style.display = "block";
    dots[autoSlideIndex-1].className += " active";
    setTimeout(AutoSlide, 2000); // Change image every 2 seconds
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("header-image");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides , 5000);
}
