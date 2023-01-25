var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');

// function to toggle the menu when the button is clicked
function toggleMenu() {
    navBar.classList.toggle('fixed');
    navBar.classList.toggle('toggle');
}

// Event listener for the toggle button
toggleButton.addEventListener('click', toggleMenu);
