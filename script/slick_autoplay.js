$(document).ready(function () {
    $('.av-slideshow').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,       /* スライドを中央揃え */
        centerPadding: '0%',    /* スライドのpadding */
        prevArrow: false,       /* 左の矢印を消す */
        nextArrow: false,       /* 右の矢印を消す */
    });
});