document.addEventListener('DOMContentLoaded', function() {
    // This event listener waits for the DOM (document) to be fully loaded and ready.

    // Select the element with the class "shirt-color-overlay".
    const colorOverlay = document.querySelector('.shirt-color-overlay');

    // Select the element with the ID "colorPicker".
    const colorInput = document.getElementById('colorPicker');

    // Add an event listener to the color input.
    colorInput.addEventListener('input', function() {
        // This event listener listens for changes in the color input.

        // Update the background color of the "shirt-color-overlay" element
        // with the value (color) selected in the color input.
        colorOverlay.style.backgroundColor = colorInput.value;
    });
});
