// Testimonial slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    // Initialize the first slide
    testimonialSlides[0].classList.add('active');

    // Function to change slide
    function changeSlide(index) {
        // Hide all slides
        testimonialSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the selected slide
        testimonialSlides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }

    // Event listeners for dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            changeSlide(slideIndex);
        });
    });

    // Auto slide change
    setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        changeSlide(currentSlide);
    }, 5000);
});