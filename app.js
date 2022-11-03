const button = document.getElementById('hamburger');
const navbar = document.getElementById('navigation');

button.addEventListener('click', function() {
    navbar.classList.toggle('active');
    button.classList.toggle('shade');
})