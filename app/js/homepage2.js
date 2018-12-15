var slideIndex = 1;
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
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex+1].style.display = "block";
    dots[slideIndex+1].className += " active";
    setTimeout(AutoSlide, 2000); // Change image every 2 seconds
}
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("header-image");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides , 5000);
// }
// function resizeGridItem(item){
//     grid = document.getElementsByClassName("grid")[0];
//     rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
//     rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
//     rowSpan = Math.ceil((item.querySelector('.grid-content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
//     item.style.gridRowEnd = "span "+rowSpan;
// }
//
// function resizeAllGridItems(){
//     allItems = document.getElementsByClassName("grid-item");
//     for(x=0;x<allItems.length;x++){
//         resizeGridItem(allItems[x]);
//     }
// }
//
// function resizeInstance(instance){
//     item = instance.elements[0];
//     resizeGridItem(item);
// }
//
// window.onload = resizeAllGridItems();
// window.addEventListener("resize", resizeAllGridItems);
//
// allItems = document.getElementsByClassName("grid-tem");
// for(x=0;x<allItems.length;x++){
//     imagesLoaded( allItems[x], resizeInstance);
// }
