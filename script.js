document.addEventListener('DOMContentLoaded', function() {
  console.log(`herre`)
  const sizeButtons = document.querySelectorAll('.size-button');
  const sizeText = document.querySelector('.product-color-options.sizes h2');

  function updateSize(button) {
    // Update the h2 text
    sizeText.textContent = 'Size: ' + button.textContent;

    // Remove the selected class from all buttons
    sizeButtons.forEach(btn => btn.classList.remove('selected'));

    // Add the selected class to the clicked button
    button.classList.add('selected');
  }

  // Add the click event listener to each button
  sizeButtons.forEach(button => {
    button.addEventListener('click', function() {
      updateSize(button);
    });
  });
});