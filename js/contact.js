// Contact form handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Here you would typically send the form data to a server
            // For now, we'll simulate a successful submission
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate server request
            setTimeout(() => {
                // Show success message
                formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
                formStatus.className = 'form-status success';
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }
});