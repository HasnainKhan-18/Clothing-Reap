// Terms-Modal close button <start>
var close = document.querySelector('.closed');
var tpopov = document.querySelector(".tpopov")
// Terms-Modal close button <end>

// Function for close modal <start>//
function closeModal() {
    modal.style.display = "none";
}
// Function for close modal <end> //

// listen for close button onclick <start //
if(close)
    close.addEventListener("click", closeModal );
// listen for close button onclick <end> //

//listen for outside click <start> //
if(tpopov)
    tpopov.addEventListener("click", closeModal)
//listen for outside click <end> //