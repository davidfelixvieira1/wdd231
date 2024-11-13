document.addEventListener("DOMContentLoaded", () => {
    const directory = document.getElementById("directory");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");

    // Fetch and display members
    async function loadMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error loading members:", error);
        }
    }

    // Display members as cards
    function displayMembers(members) {
        directory.innerHTML = members.map(member => `
            <div class="member-card">
                <img src="images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `).join('');
    }

    // Toggle views
    gridViewBtn.addEventListener("click", () => {
        directory.classList.add("grid-view");
        directory.classList.remove("list-view");
    });

    listViewBtn.addEventListener("click", () => {
        directory.classList.add("list-view");
        directory.classList.remove("grid-view");
    });

    // Footer - Last modified date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Load members on page load
    loadMembers();
});
