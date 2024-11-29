// Array of titles to cycle through
const titles = ["Dedication", "Responsible", "Productive", "Smarter", "Our Team"];

// Select the title element
const titleElement = document.getElementById("dynamic-title");

let currentIndex = 0;

// Function to update the title
function updateTitle() {
    titleElement.style.opacity = "0"; // Fade out effect
    setTimeout(() => {
        titleElement.textContent = titles[currentIndex];
        titleElement.style.opacity = "1"; // Fade in effect
        currentIndex = (currentIndex + 1) % titles.length; // Move to the next title
    }, 500); // Match this with CSS transition duration
}

// Change the title every 2 seconds
setInterval(updateTitle, 4000);
