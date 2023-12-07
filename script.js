// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scrolling animation
function handleScrollAnimation(entries) {
  entries.forEach((entry) => {
    const image = entry.target;

    if (entry.isIntersecting) {
      image.classList.add('visible', 'slide-in-right');
    }
  });
}

// Use the Intersection Observer to trigger the scrolling animation
const scrollObserver = new IntersectionObserver(handleScrollAnimation, { threshold: 0.5 });

document.querySelectorAll('.des-images img').forEach((image) => {
  scrollObserver.observe(image);
});




// ----------------------------------------------------------

// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the intersection observer callback for rotate fade-in animation
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // If the element is in the viewport, add the rotate fade-in animation class
      entry.target.classList.add('rotate-fade-in');
      observer.unobserve(entry.target);

      // Listen for the animation end event and set final state
      entry.target.addEventListener('animationend', () => {
        entry.target.style.transform = 'rotate(360deg) scale(1)';
        entry.target.style.opacity = 1;
      });
    }
  });
}

// Set up the Intersection Observer for elements with the class 'rotate-on-scroll'
const rotateObserver = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

document.querySelectorAll('.services-image img').forEach(element => {
  rotateObserver.observe(element);
});
