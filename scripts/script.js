// Date for copyright and last modified
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Hamburger menu toggle
document.getElementById("hamburger").onclick = () => {
  const navUl = document.querySelector("nav ul");
  navUl.style.display = navUl.style.display === "flex" ? "none" : "flex";
};

// Course data and functions
const courses = [
  { code: "WDD230", name: "Intro to Web Design", credits: 3, completed: true },
  { code: "WDD331", name: "Advanced CSS", credits: 3, completed: false },
  { code: "CSE121B", name: "JavaScript Programming", credits: 2, completed: false },
  { code: "CSE121A", name: "Intro to Computer Science", credits: 2, completed: true },
];

function displayCourses(filter) {
  const courseList = document.getElementById("course-list");
  courseList.innerHTML = "";

  let totalCredits = 0;
  courses.filter(course => filter === "all" || course.code.includes(filter))
         .forEach(course => {
           const courseDiv = document.createElement("div");
           courseDiv.classList.add(course.completed ? "completed" : "not-completed");
           courseDiv.innerHTML = `${course.code}: ${course.name} (${course.credits} credits)`;
           courseList.appendChild(courseDiv);
           totalCredits += course.credits;
         });
  document.getElementById("total-credits").textContent = totalCredits;
}

function filterCourses(filter) {
  displayCourses(filter);
}

// Initialize course list
displayCourses("all");
