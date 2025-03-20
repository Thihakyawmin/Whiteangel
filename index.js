
index.js:

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Dynamic greeting message
window.onload = function() {
    let greeting = document.createElement("h2");
    greeting.style.textAlign = "center";
    greeting.style.marginTop = "20px";
    
    let hour = new Date().getHours();
    if (hour < 12) {
        greeting.textContent = "Good morning, visitor!";
    } else if (hour < 18) {
        greeting.textContent = "Good afternoon, enjoy your stay!";
    } else {
        greeting.textContent = "Good evening, welcome back!";
    }
    
    document.body.prepend(greeting);
};

// Button click effect
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            button.style.transform = "scale(0.9)";
            setTimeout(() => button.style.transform = "scale(1)", 200);
        });
    });
});

Features:

Smooth scrolling when clicking internal links.

Dynamic greeting based on time of day.

Button click effect for a subtle interactive feel.


Just link this file in your HTML like this:

<script src="index.js"></script>

