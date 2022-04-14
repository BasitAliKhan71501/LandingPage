var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    watchSlidesProgress: true,
    slidesPerView: 3,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        580: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        780: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }
});

// SwiperJs 2

var swiper2 = new Swiper('.mySwiper2', {
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



let offcanvasBtn = document.getElementById("offcanvasBtn");
let scrollspy = document.getElementById("scrollspy");

scrollspy.style.visibility = "hidden";

window.onscroll = () => {
    let scr = window.scrollY;
    if (scr > 700) {
        offcanvasBtn.style.position = "fixed";
        offcanvasBtn.style.zIndex = "999999"
        offcanvasBtn.style.transition = "all ease-in-out 0.5s";
        offcanvasBtn.style.top = "15px";
        offcanvasBtn.style.right = "15px";
        offcanvasBtn.style.backgroundColor = "black";
        scrollspy.style.visibility = "visible";
        scrollspy.style.transition = "all ease-in-out 0.5s";


    } else {
        offcanvasBtn.style.position = "relative";
        offcanvasBtn.style.top = "1px";
        offcanvasBtn.style.right = "10px";
        offcanvasBtn.style.backgroundColor = "transparent";
        scrollspy.style.visibility = "hidden";
        offcanvasBtn.style.transition = "all ease-in-out 0.5s";
        scrollspy.style.transition = "all ease-in-out 0.1s";
    }
}