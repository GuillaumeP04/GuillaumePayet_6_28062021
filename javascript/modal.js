// DOM elements
let formBg = document.querySelector(".background");
let ouvrirFormBtn = document.getElementById("ouvrir--form");
let fermerFormBtn = document.getElementById("fermer--form");

ouvrirForm();
fermerForm();
// Listener 
console.log(navBarBtns);

// Functions
function ouvrirForm() {
    ouvrirFormBtn.onclick = function() {
        formBg.style.display = "block";
    }
}   

function fermerForm() {
    fermerFormBtn.onclick = function() {
        formBg.style.display = "none";
    }
}  

