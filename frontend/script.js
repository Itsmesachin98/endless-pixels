const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Backend API endpoint
const count = 5;
// const apiUrl = `http://localhost:5000/api/photos?count=${count}`;
const apiUrl = `https://endless-pixels.onrender.com/api/photos?count=${count}`;

// Check if all images were loaded
const imageLoaded = () => {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
    }
};

// Create Elements For Links & Photos, Add to DOM
const displayPhotos = () => {
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
};

// Get Photos From Backend
const getPhotos = async () => {
    try {
        const response = await fetch(apiUrl);
        console.log("This is response: ", response);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.error("Error fetching photos:", error);
    }
};

// Scroll event listener
window.addEventListener("scroll", () => {
    if (
        window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 1000 &&
        ready
    ) {
        ready = false;
        getPhotos();
    }
});

// On load
getPhotos();
