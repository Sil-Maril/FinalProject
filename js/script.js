
var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');

// function to toggle the menu when the button is clicked
function toggleMenu() {
    navBar.classList.toggle('toggle');
}

//Event listener for the toggle button
toggleButton.addEventListener('click', function(){
   toggleMenu();
   var section = document.querySelector('.section');
   section.scrollIntoView({ behavior: 'smooth' });
});

$('.toggle-menu').click(function(){
  $('.nav-bar').toggle();
  $('html, body').animate({
      scrollTop: $(".section").offset().top
  }, 2000);
});
