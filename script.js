document.addEventListener('DOMContentLoaded', function() {
    // Get the heading element
    const heading = document.querySelector('h1');
    
    // Add animation to heading on page load
    heading.style.opacity = '0';
    setTimeout(() => {
        heading.style.transition = 'opacity 1s ease-in';
        heading.style.opacity = '1';
    }, 100);
    
    // Add click event to LinkedIn button
    const linkedinButton = document.querySelector('.linkedin-button');
    if (linkedinButton) {
        linkedinButton.addEventListener('click', function() {
            // Confirm before redirecting to LinkedIn
            if (confirm('You are about to visit LinkedIn. Continue?')) {
                return true;
            }
            event.preventDefault();
        });
    }
});
// Add to script.js
document.addEventListener('DOMContentLoaded', function() {
    // Existing code remains...

    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = `${progress}%`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => observer.observe(bar));
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Content Loading Animation
    const content = document.body;
    content.style.opacity = '0';
    content.style.transition = 'opacity 0.5s ease';
    
    window.addEventListener('load', function() {
        content.style.opacity = '1';
        
        // Remove loading class once everything is loaded
        document.body.classList.remove('loading');
    });

    // LinkedIn Button Error Handling
    const linkedinButton = document.querySelector('.linkedin-button');
    if (linkedinButton) {
        linkedinButton.addEventListener('click', function(event) {
            event.preventDefault();
            try {
                if (confirm('You are about to visit LinkedIn. Continue?')) {
                    window.location.href = this.href;
                }
            } catch (error) {
                console.error('Error accessing LinkedIn:', error);
                alert('Sorry, there was an error accessing LinkedIn. Please try again later.');
            }
        });
    }
});

// Lazy Loading Images (if you add images later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}
