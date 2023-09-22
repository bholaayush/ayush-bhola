// Select all anchor links with the "smooth-scroll" class
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// Add a click event listener to each anchor link
anchorLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Prevent the default behavior of the link
    e.preventDefault();

    // Get the target element's ID from the link's href attribute
    const targetId = link.getAttribute('href').substring(1);

    // Find the target element by its ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate the offset to scroll smoothly to the target element
      const offset = targetElement.getBoundingClientRect().top;
      
      // Scroll smoothly to the target element
      window.scrollTo({
        top: offset + window.scrollY,
        behavior: 'smooth'
      });
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
});
