    // Variables
    const checkboxes = document.querySelectorAll('.category'); // Category checkboxes
    const items = document.querySelectorAll('.item'); // All items

    // Event listeners for checkboxes
    document.addEventListener('DOMContentLoaded', function () {
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', filterItems);
        });

        // Initial visibility check
        filterItems(); // Call to display items based on initial checkbox state
    });

    // Filter functionality
    function filterItems() {
        const selectedCategories = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        console.log('Selected Categories:', selectedCategories); // Debugging line

        // Show or hide items based on selected categories
        items.forEach(item => {
            const itemCategory = item.classList[1]; // Assuming the second class indicates the category
            console.log('Item Category:', itemCategory); // Debugging line
            if (selectedCategories.length === 0 || selectedCategories.includes(itemCategory)) {
                item.style.display = 'block'; // Show item
            } else {
                item.style.display = 'none'; // Hide item
            }
        });
    }