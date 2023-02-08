const cardsContainer = document.getElementById('cardsContainer');

let scrolled = 0;

function handleScrollRight() {
    if (scrolled <= cardsContainer.offsetWidth) {
        scrolled += 400
        cardsContainer.scroll({
            top: 0,
            left: scrolled,
            behavior: 'smooth'
        });
    }

    if (scrolled >= cardsContainer.offsetWidth) {
        scrolled = cardsContainer.offsetWidth
    }
}

function handleScrollLeft() {
    if (scrolled >= 400) {
        scrolled -= 400
        cardsContainer.scroll({
            top: 0,
            left: scrolled,
            behavior: 'smooth'
        });
    }
    if (scrolled <= 400) {
        cardsContainer.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}