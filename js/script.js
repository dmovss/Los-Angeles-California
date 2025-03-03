// Smooth Scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    document.querySelectorAll('.gallery-item').forEach(item => {
        const speed = 0.2;
        item.style.backgroundPositionY = `${scrollPosition * speed}px`;
    });
});

// Google Maps Integration
function initMap() {
    const losAngeles = { lat: 34.0522, lng: -118.2437 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: losAngeles,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#212121' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        ]
    });

    new google.maps.Marker({
        position: losAngeles,
        map: map,
        title: 'Los Angeles'
    });
}

// Lazy Load Images (Intersection Observer)
const images = document.querySelectorAll('.gallery-item');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

images.forEach(image => {
    image.style.opacity = 0;
    observer.observe(image);
});