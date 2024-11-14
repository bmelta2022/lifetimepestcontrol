// Slideshow functionality
let slideIndex = 0;
showSlides();

// Function to control next/previous slide
function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

// Function to display slides
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    
    if (slideIndex >= slides.length) slideIndex = 0; // Loop back to the first slide
    if (slideIndex < 0) slideIndex = slides.length - 1; // Loop back to the last slide
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Show the current slide
    slides[slideIndex].style.display = "block";
}

// Auto slideshow - change slide every 5 seconds
setInterval(() => {
    slideIndex++;
    showSlides();
}, 5000); // Change slide every 5000ms (5 seconds)

// Scroll-to-Top button functionality
const scrollButton = document.querySelector(".scroll-to-top");
scrollButton.style.display = "none";

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

// Function to scroll to the top of the page
scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
