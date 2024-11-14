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

// Blog search functionality
function filterPosts() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const posts = document.getElementsByClassName("blog-post");

    for (let post of posts) {
        const title = post.getElementsByTagName("h4")[0].innerText.toLowerCase();
        const content = post.getElementsByTagName("p")[0].innerText.toLowerCase();
        post.style.display = (title.includes(searchQuery) || content.includes(searchQuery)) ? "block" : "none";
    }
}

// Load more posts functionality
function loadMorePosts() {
    const hiddenPosts = document.querySelectorAll(".blog-post.hidden");
    hiddenPosts.forEach((post, index) => {
        if (index < 2) { // Show 2 posts at a time
            post.classList.remove("hidden");
        }
    });

    // Hide load more button if no more hidden posts
    if (document.querySelectorAll(".blog-post.hidden").length === 0) {
        document.getElementById("load-more").style.display = "none";
    }
}

// Like button functionality
function likePost(button) {
    const likeCount = button.querySelector(".like-count");
    let count = parseInt(likeCount.textContent);
    likeCount.textContent = count + 1;
}
