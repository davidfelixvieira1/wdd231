document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    timestampField.value = new Date().toISOString();
});

function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve form data from the query string or session storage
    const urlParams = new URLSearchParams(window.location.search);
    
    document.getElementById('firstName').textContent = urlParams.get('firstName') || 'N/A';
    document.getElementById('lastName').textContent = urlParams.get('lastName') || 'N/A';
    document.getElementById('email').textContent = urlParams.get('email') || 'N/A';
    document.getElementById('phone').textContent = urlParams.get('phone') || 'N/A';
    document.getElementById('organization').textContent = urlParams.get('organization') || 'N/A';
    document.getElementById('membership').textContent = urlParams.get('membership') || 'N/A';
    document.getElementById('timestamp').textContent = urlParams.get('timestamp') || 'N/A';
});

