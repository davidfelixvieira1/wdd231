document.addEventListener("DOMContentLoaded", () => {
    // Display visit message
    const visitMessageElement = document.getElementById("visit-message");
    const lastVisitKey = "last-visit";
    const currentVisit = Date.now();
    const lastVisit = localStorage.getItem(lastVisitKey);

    let message = "Welcome! Let us know if you have any questions.";
    if (lastVisit) {
        const daysDifference = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysDifference < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago.`;
        }
    }

    visitMessageElement.textContent = message;
    localStorage.setItem(lastVisitKey, currentVisit);

    // Lazy loading for images
    const images = document.querySelectorAll("img[loading='lazy']");
    images.forEach(img => {
        img.addEventListener("load", () => {
            img.classList.add("loaded");
        });
    });
});

