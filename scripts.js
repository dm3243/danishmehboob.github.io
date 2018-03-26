// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("modalButton");

// Adding an event listner for clicking on button to open modal
btn.addEventListener('click',openModal)

// Function to open the modal
function openModal(){
    modal.style.display = 'block';
}

/*
// When the user clicks on the button, open the modal 
window.onload = function() {
    btn.onclick = function() {
        modal.style.display = "block";
    }
}
*/

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}