export function initSwiper() {
    const el = document.querySelector('.swiper');
    if (!el) {
        console.log('Swiper not found');
        return;
    }

    // new Swiper(el, {
    //     slidesPerView: 1,
    //     loop: true,
    //     grabCursor: true,
    //     spaceBetween: 20, // nice spacing
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true
    //     }
    // });
    new Swiper(el, {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,

        spaceBetween: 10,

        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        autoplay: {
            delay: 3000,   // ⏱ time between slides (ms)
            disableOnInteraction: false // keeps autoplay after user swipes
        }
    });
}