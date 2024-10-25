document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');

    function showSlide(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index); // Toggle active class for fade effect
        });
    }

    function changeSlide(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        showSlide(currentIndex);
    }

    function autoSlide() {
        setInterval(() => {
            changeSlide(1); // Automatically go to the next slide every 3 seconds
        }, 3000);
    }

    // Initialize the slideshow
    showSlide(currentIndex);
    autoSlide();

    // Manual navigation
    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));
});


    // Appointment form submission handler
    document.getElementById('appointment-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Collect form data
        const formData = new FormData(this);
        
        // Send data to your server using fetch or XMLHttpRequest
        fetch('/api/book-appointment', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                alert('Appointment booked successfully!');
                this.reset(); // Reset the form after submission
            } else {
                alert('Error booking appointment. Please try again.');
            }
        })
        .catch(error => console.error('Error:', error));
    });
