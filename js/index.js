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