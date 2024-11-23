// Select elements
const decreaseBtn = document.querySelector('.decreasing-btn');
const increaseBtn = document.querySelector('.adding-btn');
const quantityValue = document.querySelector('.quantity-value');

// Initialize quantity
let quantity = 1;

// Function to update the displayed quantity
function updateQuantity() {
    quantityValue.textContent = quantity;
}

// Event listener for decreasing button
decreaseBtn.addEventListener('click', function() {
    if (quantity > 1) { // Prevent negative values
        quantity--;
        updateQuantity();
    }
});

// Event listener for increasing button
increaseBtn.addEventListener('click', function() {
    quantity++;
    updateQuantity();
});

// Initial display
updateQuantity();

