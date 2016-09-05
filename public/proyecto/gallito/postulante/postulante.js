"use strict";

$(document).on("ready", inicio);
function iniciarSlider() {
	var owl = $("#owl-slider_3");

	owl.owlCarousel({
		navigation: true,
		lazyLoad: true,
		items: 4, //10 items above 1000px browser width
		itemsDesktop: [1200, 3], //5 items between 1000px and 901px
		itemsDesktopSmall: [801, 2], // 3 items betweem 900px and 601px
		itemsTablet: [596, 1], //2 items between 600 and 0;
		itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option

	});

	// Custom Navigation Events
	$(".arrow-next").click(function () {
		owl.trigger('owl.next');
	});
	$(".arrow-prev").click(function () {
		owl.trigger('owl.prev');
	});
	//owl.trigger('owl.play',4000);
	$(".stop").click(function () {
		owl.trigger('owl.stop');
	});
}
function inicio() {
	iniciarSlider();
} // ESTA SIEMPRE DEBE SER LA ULTIMA LINEA DEL ARCHVO DE LO CONTRARI DARA ERROR