// Fish Fury Website - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Lazy load video for better performance
    const videoIframe = document.getElementById('game-video');
    if (videoIframe) {
        // Add loading="lazy" attribute if not already present
        videoIframe.setAttribute('loading', 'lazy');
    }

    // Add click tracking for analytics (optional)
    const trackClick = function(element, eventName) {
        element.addEventListener('click', function() {
            // Add analytics tracking here if needed
            console.log(`${eventName} clicked`);
        });
    };

    // Track App Store link clicks
    const appStoreLink = document.querySelector('.app-store-link');
    if (appStoreLink) {
        trackClick(appStoreLink, 'App Store Link');
    }

    // Track social media link clicks
    const socialLinks = document.querySelectorAll('#sibox a');
    socialLinks.forEach(link => {
        trackClick(link, 'Social Media Link');
    });
});
