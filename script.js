// Slideshow functionality
let slideIndex = 0;
showSlides();

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex].style.display = "block";
}

// Auto slideshow - change slide every 5 seconds
setInterval(() => {
    slideIndex++;
    showSlides();
}, 5000);

// Scroll-to-Top button functionality
const scrollButton = document.querySelector(".scroll-to-top");
scrollButton.style.display = "none";

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

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
    const loadMoreButton = document.getElementById("load-more");
    
    let count = 0; // Limit to show 2 posts at a time
    hiddenPosts.forEach(post => {
        if (count < 2) {
            post.classList.remove("hidden");
            count++;
        }
    });

    // Hide load more button if no more hidden posts
    if (document.querySelectorAll(".blog-post.hidden").length === 0) {
        loadMoreButton.style.display = "none";
    }
}

// Like button functionality
function likePost(button) {
    const likeCount = button.querySelector(".like-count");
    let count = parseInt(likeCount.textContent);
    likeCount.textContent = count + 1;
}
