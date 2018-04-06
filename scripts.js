// Get the modals
const modals = document.querySelectorAll('.modal');

// Get the button that opens the modal
const btns = document.querySelectorAll('.modalButton');

//to add an event listner to all the elements, need a for loop or forEach iterator
btns.forEach(function(button, index) {
  setUpListener(index);
});

function setUpListener(index) {
  btns[index].addEventListener('click', function(event) {
    openModal(index);
  });
}

// Function to open the modal
function openModal(index) {
  // check if exists first
  modals[index].style.display = 'block';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.className === 'modal') {
    modals.forEach(function(el) {
      el.style.display = 'none';
    });
  }

  //possibly more elegant solution:
  // get the current element's number
  // var myNumber = event.target.?something?;
  // var myModal = document.querySelector(`modal-${number}`);
  // target the modal with that number here
};
