/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * PUT_YOUR_NAME_HERE
 */

/** namespace. */
var rhit = rhit || {};

/** globals */
rhit.slideIndex = 0;

/** function and class syntax examples */
rhit.showSlides = function () {
	let slides = document.getElementsByClassName("slide");
    for (let i=0; i<slides.length; i++) {
        slides[i].classList.add("hidden");
    }

    rhit.slideIndex = (rhit.slideIndex + 1) % slides.length;
    slides[rhit.slideIndex].classList.remove("hidden");

    setTimeout(rhit.showSlides, 5000);
};

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
    rhit.showSlides();
};

rhit.main();
