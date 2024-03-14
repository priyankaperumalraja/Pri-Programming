// // Get the button and container elements
// const slideButton = document.getElementById('slideButton');
// const container = document.getElementById('container');

// // Variables to track mouse movement and button position
// let isMouseDown = false;
// let initialMouseY = 0;
// let initialButtonY = 0;

// // Add mouse event listeners to the document
// document.addEventListener('mousedown', e => {
//   if (e.target === slideButton) {
//     isMouseDown = true;
//     initialMouseY = e.clientY;
//     const buttonRect = slideButton.getBoundingClientRect();
//     const containerRect = container.getBoundingClientRect();
//     initialButtonY = buttonRect.top - containerRect.top;
//   }
// });

// document.addEventListener('mouseup', () => {
//   isMouseDown = false;
// });

// document.addEventListener('mousemove', e => {
//   if (isMouseDown) {
//     const mouseY = e.clientY;
//     const mouseDeltaY = mouseY - initialMouseY;

//     const newButtonY = initialButtonY + mouseDeltaY;
//     const containerRect = container.getBoundingClientRect();
//     const buttonRect = slideButton.getBoundingClientRect();

//     // Limit button movement within the container boundaries vertically
//     if (
//       newButtonY >= 0 &&
//       newButtonY + buttonRect.height <= containerRect.height
//     ) {
//       slideButton.style.top = `${newButtonY}px`;
//     }
//   }
// });


//WORKS!! (For draggable FREELY THROUGHOUT PARENT DIV!!!---\/\/\/
// var mousePosition;
// var offset = [0, 0];
// var isDown = false;
// // var draggedElement = null;

// var numOfBeads = document.querySelectorAll(".bead").length;
// console.log(numOfBeads);

// for(var i = 0; i < numOfBeads; i++) {
//   //Adds mousedown EventListener
//   document.querySelectorAll(".bead")[i].addEventListener("mousedown", function(e) {
//     isDown = true;
//     draggedElement = this;
//     offset = [
//       this.offsetLeft - e.clientX,
//       this.offsetTop - e.clientY
//     ];
//   }, true);

//   //Adds mouseup EventListener
//   document.querySelector("#container").addEventListener("mouseup", function () {
//     isDown = false;
//     draggedElement = null;
//   }, true);

//   //Adds mousemove EventListener
//   document.querySelector("#container").addEventListener("mousemove", function(event) {
//     event.preventDefault();
//     if (isDown && draggedElement) {
//       mousePosition = {
//         x: event.clientX,
//         y: event.clientY
//       };
//       draggedElement.style.left = (mousePosition.x + offset[0]) + 'px';
//       draggedElement.style.top = (mousePosition.y + offset[0]) + 'px';
//     }
//   }, true);

// };
//----------------------------------------------------------------------------------
const container = document.querySelectorAll('.beadCol');
//const bead = document.querySelector('.bead');
var numOfBeads = document.querySelectorAll(".bead").length;
console.log(numOfBeads);
let isDragging = false;
var draggedElement = null;

for(var i = 0; i < numOfBeads; i++) {
  document.querySelectorAll(".bead")[i].addEventListener('dragstart', function (e) {
    isDragging = true;
    draggedElement = this;
    e.dataTransfer.setDragImage(new Image(), 0, 0); // Hide the default drag image
  });
  
  container[i].addEventListener('dragover', function (e) {
    e.preventDefault(); // Allow drop
  
    if (isDragging) {
        const containerRect = this.getBoundingClientRect();
        const mouseY = e.clientY - containerRect.top - 30;
        const newPosition = Math.min(Math.max(0, mouseY), containerRect.height - draggedElement.offsetHeight);
  
        draggedElement.style.top = newPosition + 'px';
    }
  });
  
  container[i].addEventListener('dragend', function () {
    isDragging = false;
  });
}

//NEXT STEPS: Work on adding the container JS and Style to ALL containers you make. 
//Or just find a way to make the "beads" be side by side. 






