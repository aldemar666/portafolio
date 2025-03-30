document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.querySelector('.back-to-top');
  
  // Show button when user scrolls down 300px from the top
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  
  // Smooth scroll to top when button is clicked
  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Inicializar elementos para animación al scroll
  const elementsToAnimate = document.querySelectorAll('.section-title, .project-card, .skill-category, .testimonial-slide, .contact-item');
  
  // Añadir clase para preparar animación
  elementsToAnimate.forEach(element => {
    element.classList.add('scroll-animate');
  });
  
  // Función para verificar si un elemento está en el viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  // Función para animar elementos cuando son visibles
  function animateOnScroll() {
    elementsToAnimate.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('visible');
      }
    });
  }
  
  // Ejecutar al cargar la página
  animateOnScroll();
  
  // Ejecutar al hacer scroll
  window.addEventListener('scroll', animateOnScroll);
});