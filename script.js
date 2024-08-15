document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    const bannerHome = document.querySelector('#banner-home');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) { // Adjust the threshold as needed
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        
        // Smooth scroll to the #banner-home section
        bannerHome.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
