// Course.mjs

const aCourse = {
    courseName: "JavaScript Essentials",
    courseCode: "JS101",
    sections: [
        { sectionNumber: 1, enrollment: 30, maxCapacity: 40 },
        { sectionNumber: 2, enrollment: 25, maxCapacity: 35 },
        { sectionNumber: 3, enrollment: 20, maxCapacity: 25 },
    ],
    enroll(sectionNumber) {
        const section = this.sections.find(sec => sec.sectionNumber === sectionNumber);
        if (section && section.enrollment < section.maxCapacity) {
            section.enrollment++;
        }
    },
    drop(sectionNumber) {
        const section = this.sections.find(sec => sec.sectionNumber === sectionNumber);
        if (section && section.enrollment > 0) {
            section.enrollment--;
        }
    }
};

function setCourseInfo(course) {
    const courseTitle = document.querySelector("#course-title");
    courseTitle.textContent = `${course.courseName} (${course.courseCode})`;
}

function renderSections(sections) {
    const sectionList = document.querySelector("#sections");
    sectionList.innerHTML = ""; // Clear current sections
    sections.forEach(section => {
        const listItem = document.createElement("li");
        listItem.textContent = `Section ${section.sectionNumber}: ${section.enrollment}/${section.maxCapacity}`;
        sectionList.appendChild(listItem);
    });
}

export default aCourse;
