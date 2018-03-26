// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("modalButton");

/* 
Adding an event listner for clicking on button to open modal
btn[0].addEventListener('click',openModal)
*/

//to add an event listner to all the elements, need a for loop
for (var i=0; i<btn.length; i++) {
    btn[i].addEventListener('click',openModal)
}

// Function to open the modal
function openModal(){
    modal[0].style.display = 'block';
}

/*
//My new method to try
//based on forloop and function within a function as seen right below,
//but does not work properly.
for (var i=0; i<btn.length; i++) {
    btn[i].onclick = function() {
        modal[i].style.display = "block";
    }
}
*/

/* This was the old method I used to open model...
// When the user clicks on the button, open the modal 
window.onload = function() {
    btn.onclick = function() {
        modal.style.display = "block";
    }
}
*/

/*This portion of the code seems to break something...
// Rewriting function to be two parts - event listener + function

window.addEventListener('click',closeModal)

function closeModal(event){
    if(event.target == modal){
        modal.style.display = 'none';
    } 
}
*/


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal[0]) {
        modal[0].style.display = "none";
    }
}
