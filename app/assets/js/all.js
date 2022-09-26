$(function () {
	console.log("Hello Bootstrap5");
});

//點擊搜尋按鈕 search icon後 h1& menu icon d-none then show search form
$(document).ready(function () {
	$(".searchBtn").click(function (event) {
		$("h1").toggle();
		$(".navbar-toggler-icon").toggle();
		$(".searchFrame").removeClass("d-none");
	});
});

// click 左側箭頭（返回）按鈕icon
$(document).ready(function () {
	$(".fa-angle-left").click(function (event) {
		$("h1").toggle();
		$(".navbar-toggler-icon").toggle();

		$(".fa-angle-left").toggle();
	});
});

//click 選單 icon then menu icon d-none & show close icon
$(document).ready(function () {
	$(".navbar-toggler-icon").click(function (event) {
		$(".navbar-toggler-icon").toggle();
		$(".close-icon").toggle();
	});
});

// click 關閉選單按鈕close-icon then show menu icon
$(document).ready(function () {
	$(".close-icon").click(function (event) {
		$(".navbar-toggler-icon").toggle();
		$(".close-icon").toggle();
	});
});

// artist swiper
// <!-- Initialize Swiper -->

var swiper = new Swiper(".artistSwiper", {
	slidesPerView: "1",

	centeredSlides: true,
	loop: true,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});
