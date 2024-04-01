
/* Script for mobile screen */
let barIcon = document.querySelector('#bar-icon');
let closeButton = document.querySelector('#cross-icon');
let navMenu = document.querySelector('#menu');

barIcon.addEventListener('click', () => {
    navMenu.classList.add("active");
    barIcon.style.display = "none";
    closeButton.style.display = "block";
});


let menuItems = document.querySelectorAll('.menu-item');
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove("active");
            closeButton.style.display = "none";
            barIcon.style.display = "block";
        }
    });
}


closeButton.addEventListener('click', () => {
    navMenu.classList.remove("active");
    closeButton.style.display = "none";
    barIcon.style.display = "block";
});
