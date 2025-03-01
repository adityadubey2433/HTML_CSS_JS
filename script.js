// Toggle the visibility of the search input when the search icon is clicked
document.getElementById('searchicon2').addEventListener('click', function () {
    const searchInput = document.getElementById('searchinput2');
    // Toggle the search input visibility
    if (searchInput.style.display === 'block') {
        searchInput.style.display = 'none';
    } else {
        searchInput.style.display = 'block';
    }
});

// Toggle the navigation menu when clicking the hamburger icon (mobile view)
document.querySelector('.fa-bars').addEventListener('click', function () {
    const navMenu = document.querySelector('.nav');
    // Show the menu on click
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
});

// Close the navigation menu when clicking the close icon (x)
document.getElementById('hdcross').addEventListener('click', function () {
    const navMenu = document.querySelector('.nav');
    // Hide the menu on close icon click
    navMenu.style.display = 'none';
});
