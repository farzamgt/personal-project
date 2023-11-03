// Burger Menu
const toggleBtn = document.querySelector(".toggel-btn");
const toggleBtnIcon = document.querySelector(".toggel-btn i");
const dropDownMenu = document.querySelector(".nav__dropdown");

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
      ? 'fa-solid fa-x'
      : 'fa-solid fa-bars'
};

// Carousel
const carousel = document.querySelector(".tender__links_card");
const carouselBtns = document.querySelectorAll(".carousel_btn i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth + 20;

let isDragging = false, startX, startScrollLeft;

carouselBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft -(e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);



