// Fullscreen Image Viewer
const portfolioImages = document.querySelectorAll(".portfolio-box img");
const fullscreenOverlay = document.getElementById("fullscreenOverlay");
const fullscreenImage = document.getElementById("fullscreenImage");
const closeBtn = document.getElementById("closeBtn");

// Open fullscreen view
portfolioImages.forEach(img => {
  img.addEventListener("click", () => {
    fullscreenImage.src = img.src; // Set the source of the fullscreen image
    fullscreenOverlay.style.display = "flex"; // Show the overlay
  });
});

// Close fullscreen view
closeBtn.addEventListener("click", () => {
  fullscreenOverlay.style.display = "none"; // Hide the overlay
});

// Close fullscreen view when clicking outside the image
fullscreenOverlay.addEventListener("click", (e) => {
  if (e.target === fullscreenOverlay) {
    fullscreenOverlay.style.display = "none";
  }
});



// Show section when navigation link is clicked
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      
      // Hide all sections
      document.querySelectorAll(".section").forEach(section => {
        section.style.display = "none";
      });
      
      // Get the target section
      const target = document.querySelector(link.getAttribute("href"));
      
      // Show the target section
      target.style.display = "block";
      
      // Smooth scroll to the target section
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  const welcomeText = document.getElementById('welcome-text');
  const texts = [
    "Welcome to My Profile !!",
    "I'm Ken A. Macabenta",
    "Programmer",
    "Developer",
    "Let's build something amazing together!"
  ];
  
  let textIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;
  const typingSpeed = 50; // Speed of typing and deleting a character
  const pauseTime = 1500; // Pause time before starting to delete or type next text
  
  function typeLetterByLetter() {
    const currentText = texts[textIndex];
  
    if (isDeleting) {
      // Remove letters
      welcomeText.textContent = currentText.substring(0, letterIndex - 1);
      letterIndex--;
    } else {
      // Add letters
      welcomeText.textContent = currentText.substring(0, letterIndex + 1);
      letterIndex++;
    }
  
    let delay = typingSpeed; // Default delay between typing or deleting characters
  
    // Pause when text is fully typed
    if (!isDeleting && letterIndex === currentText.length) {
      delay = pauseTime;
      isDeleting = true; // Start deleting after the pause
    }
    // Pause when text is fully deleted, then switch to the next text
    else if (isDeleting && letterIndex === 0) {
      delay = pauseTime;
      isDeleting = false; // Start typing the next text
      textIndex = (textIndex + 1) % texts.length; // Cycle through the texts
    }
  
    setTimeout(typeLetterByLetter, delay); // Recursively call with calculated delay
  }
  
  typeLetterByLetter(); // Start typing animation
  
  // JavaScript for scroll-triggered animation
document.addEventListener('scroll', () => {
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      bar.classList.add('visible');
    }
  });
});
