let slideIndex = 0;
showSlides(slideIndex);

// Function to control next/previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to display the current slide
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Show the current slide
    slides[slideIndex].style.display = "block";
}

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