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
