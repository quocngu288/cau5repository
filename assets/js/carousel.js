var owl1 = $('.owl-caro1');
var owl2 = $('.owl-caro2');
var owl3 = $('.owl-caro3');
owl1.owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
// $
owl2.owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        660: {
            items: 2
        },
        800: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})
owl3.owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        300:{
            items: 1
        },
        500: {
            items: 2
        },
        740: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})