var typed = new Typed('.auto-type', {
    strings: ['Abhay Maurya', 'Web Developer', 'Coder'],
    typeSpeed: 100, 
    backSpeed: 150,
    loop: true,
    backDelay: 1000,
});

// Get the scrollable container and buttons
const scrollContainer = document.getElementById('part-4');
const leftBtn = document.querySelector('.scroll-left');
const rightBtn = document.querySelector('.scroll-right');

// Add event listeners to the buttons
if (leftBtn && rightBtn && scrollContainer) {
  // Scroll left
  leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: -320,
      behavior: 'smooth'
    });
  });

  // Scroll right
  rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: 320,
      behavior: 'smooth'
    });
  });
}


