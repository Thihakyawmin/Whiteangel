script.js (Interactive Effects)

document.getElementById("magicButton").addEventListener("click", function() {
    let box = document.getElementById("box");
    box.style.transform = "rotate(360deg) scale(1.5)";
    box.style.background = "#ffcc00";

    setTimeout(() => {
        box.style.transform = "rotate(0deg) scale(1)";
        box.style.background = "white";
    }, 1000);