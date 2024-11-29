const titles = ["Our Team", "Dedication", "Responsible", "Productive", "Smarter"];
const titleElement = document.getElementById("dynamic-title");
let currentIndex = 0;

function animateText(text, callback) {
    titleElement.textContent = ""; // Clear existing text
    let index = 0;

    function typeLetter() {
        if (index < text.length) {
            titleElement.textContent += text[index];
            index++;
            setTimeout(typeLetter, 150); // Delay between letters
        } else {
            setTimeout(callback, 1000); // Delay before showing the next title
        }
    }

    typeLetter();
}

function cycleTitles() {
    animateText(titles[currentIndex], () => {
        currentIndex = (currentIndex + 1) % titles.length; // Move to the next title
        cycleTitles(); // Repeat animation
    });
}

// Start the animation
cycleTitles();
