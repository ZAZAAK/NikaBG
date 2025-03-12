// Function to Open Modal
function openModal(member) {
    document.getElementById(member + "-modal").style.display = "flex";
}

// Function to Close Modal
function closeModal(member) {
    document.getElementById(member + "-modal").style.display = "none";
}

// Close Modal When Clicking Outside
window.onclick = function(event) {
    let modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};
