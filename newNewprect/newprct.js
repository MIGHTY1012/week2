document.addEventListener('DOMContentLoaded', function() {
    let hamburger = document.querySelector('.hamburger');
    let navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        // Toggle the 'open' class on hamburger icon
        // hamburger.classList.toggle('open');
        navLinks.Style.display = 'flex'

        // Toggle the visibility of the navigation links
        navLinks.classList.toggle('open');
        navLinks
    });
});
