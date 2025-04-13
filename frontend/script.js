const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Backend API endpoint
const count = 5;
const apiUrl = `https://endless-pixels.onrender.com/api/photos?count=${count}`;

// Increment the count of loaded images and check if all images are loaded.
// If all images are loaded, set 'ready' to true and hide the loader.
function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
    }
}

// Create and display photo elements dynamically on the page.
// For each photo in the photosArray, create a link (<a>) and an image (<img>).
// Set the appropriate attributes for the link and image, and add an event listener
// to track when each image has finished loading. Append the created elements to the DOM.
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    photosArray.forEach((photo) => {
        const item = document.createElement("a");
        item.setAttribute("href", photo.links.html);
        item.setAttribute("target", "_blank");

        const img = document.createElement("img");
        img.setAttribute("src", photo.urls.regular);
        img.setAttribute("alt", photo.alt_description || "Unsplash Photo");
        img.setAttribute("title", photo.alt_description || "Unsplash Photo");

        img.addEventListener("load", imageLoaded);

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Fetch photos from the backend API and update the photosArray.
// Once the photos are fetched, call displayPhotos() to render them on the page.
// If an error occurs during the fetch, log it to the console.
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.error("Error fetching photos:", error);
    }
}

// Listen for scroll events and check if the user is near the bottom of the page.
// If the user is near the bottom and the app is ready, fetch and load more photos.
window.addEventListener("scroll", () => {
    if (
        window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 1000 &&
        ready
    ) {
        ready = false; // Prevent multiple fetches until current photos are loaded
        getPhotos();
    }
});

// On load
getPhotos();
