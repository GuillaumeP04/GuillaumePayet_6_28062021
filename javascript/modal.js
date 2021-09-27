// DOM elements
let formBg = document.querySelector(".background");
let fermerFormBtn = document.getElementById("fermer--form");
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let email = document.getElementById("email");
let message = document.getElementById("message");
let btnEnvoyer = document.getElementById("btn--envoyer");
let form = document.querySelector('form.contact--form');
let blur = document.querySelector("#blur");
let body = document.querySelector("body");

ouvrirForm();
fermerForm();
// Listener 
form.addEventListener('submit', submitForm);
fermerFormBtn.addEventListener('click', fermerForm);

// Functions
function ouvrirForm() {
    formBg.style.display = "block";
    blur.style.display = "block";
    body.style.overflow = 'hidden';
    body.setAttribute('aria-hidden', 'true')
    formBg.setAttribute('aria-hidden', 'false')
}   

function fermerForm() {
    formBg.style.display = "none";
    blur.style.display = "none";
    body.style.overflow = 'visible';
    body.setAttribute('aria-hidden', 'false')
    formBg.setAttribute('aria-hidden', 'true')
}  

function submitForm(e) {
    e.preventDefault();
    let x = form.elements;
    console.log("Prénom: ", x['prenom'].value);
    console.log("Nom: ", x['nom'].value);
    console.log("Email: ", x['email'].value);
    console.log("Message: ", x['message'].value);
    fermerForm();
}
