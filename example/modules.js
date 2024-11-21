// modules.js
import aCourse from Course.mjs;

// Initialize the course
aCourse.init();

// Add event listeners
document.querySelector("#enroll-btn").addEventListener("click", () => {
    const sectionNumber = parseInt(document.querySelector("#section-number").value, 10);
    aCourse.enroll(sectionNumber);
    renderSections(aCourse.sections);
});

document.querySelector("#drop-btn").addEventListener("click", () => {
    const sectionNumber = parseInt(document.querySelector("#section-number").value, 10);
    aCourse.drop(sectionNumber);
    renderSections(aCourse.sections);
});

