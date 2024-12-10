const slides = [
  "Hello, I'm Jonathan!",
  "I specialize in web development and design.",
  "Education: Currently getting my Bachelor's in Computer Science, Miva open University.",
  "Want to know more about me? Click the button below!"
];

let currentSlide = 0;

const aboutMeDiv = document.getElementById("about-me");

function updateSlide() {
  aboutMeDiv.textContent = slides[currentSlide];
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
}

// Initialize the first slide
updateSlide();
