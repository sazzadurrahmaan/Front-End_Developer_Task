// script.js

// Get modal element and close button
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close-btn');

// Get all "View Details" buttons
const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

// Event listener for opening the modal
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement;
        const details = card.getAttribute('data-details');
        
        // Update the modal content
        modalText.textContent = details;

        // Show the modal
        modal.style.display = 'flex';
    });
});

// Event listener for closing the modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
