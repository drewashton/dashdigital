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
  function handleScrollAnimation() {
    const images = document.querySelectorAll('.des-images img');
  
    images.forEach((image) => {
      if (isElementInViewport(image)) {
        image.classList.add('visible');
      }
    });
  }
  
  // Use the Intersection Observer to trigger the animation
  const observer = new IntersectionObserver(handleScrollAnimation, { threshold: 0.5 });
  
  document.querySelectorAll('.names-images img').forEach((image) => {
    observer.observe(image);
  });
  
  // Add an event listener for scrolling to trigger the animation
  document.addEventListener('scroll', handleScrollAnimation);
  
