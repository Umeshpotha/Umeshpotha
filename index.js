const lines = [
    "👋 Hello, I'm Umesh, a Passionate tech Enthusiast from India.",
    "I am actively looking for Internships Across India.",
    "My interests are in Data Science, ML, GENAI, LLMs"
];

let lineIndex = 0;
let charIndex = 0;
let typingSpeed = 100; // Adjust typing speed here (in milliseconds)

function type() {
    if (lineIndex < lines.length) {
        const currentLine = lines[lineIndex];
        if (charIndex < currentLine.length) {
            document.getElementById('typewriter-text').innerHTML += currentLine.charAt(charIndex);
            charIndex++;
        } else {
            document.getElementById('typewriter-text').innerHTML += '<br>'; // Line break after each line
            lineIndex++;
            charIndex = 0;
        }
    }
    setTimeout(type, typingSpeed);
}

type(); // Start the typing animation
