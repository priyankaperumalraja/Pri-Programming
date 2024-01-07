// Get the button and container elements
const slideButton = document.getElementById('slideButton');
const container = document.getElementById('container');

// Variables to track mouse movement and button position
let isMouseDown = false;
let initialMouseY = 0;
let initialButtonY = 0;

// Add mouse event listeners to the document
document.addEventListener('mousedown', e => {
  if (e.target === slideButton) {
    isMouseDown = true;
    initialMouseY = e.clientY;
    const buttonRect = slideButton.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    initialButtonY = buttonRect.top - containerRect.top;
  }
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

document.addEventListener('mousemove', e => {
  if (isMouseDown) {
    const mouseY = e.clientY;
    const mouseDeltaY = mouseY - initialMouseY;

    const newButtonY = initialButtonY + mouseDeltaY;
    const containerRect = container.getBoundingClientRect();
    const buttonRect = slideButton.getBoundingClientRect();

    // Limit button movement within the container boundaries vertically
    if (
      newButtonY >= 0 &&
      newButtonY + buttonRect.height <= containerRect.height
    ) {
      slideButton.style.top = `${newButtonY}px`;
    }
  }
});
