// DOM elements
let formBg = document.querySelector(".background");
let fermerFormBtn = document.getElementById("fermer--form");
let nom = document.getElementById("nom");
let form = document.querySelector("form.contact--form");
let blur = document.querySelector("#blur");
let body = document.querySelector("body");

key();
ouvrirForm();
fermerForm();
// Listener 
form.addEventListener("submit", submitForm);
fermerFormBtn.addEventListener("click", fermerForm);

// Functions   
function fermerForm() {
    formBg.style.display = "none";
    blur.style.display = "none";
    body.style.overflow = "scroll";
    body.setAttribute("aria-hidden", "false");
    formBg.setAttribute("aria-hidden", "true");
}  

function ouvrirForm() {
    formBg.style.display = "block";
    blur.style.display = "block";
    body.style.overflow = "hidden";
    body.setAttribute("aria-hidden", "true");
    formBg.setAttribute("aria-hidden", "false");
    nom.focus();
}

function submitForm(e) {
    e.preventDefault();
    let x = form.elements;
    console.log("Nom: ", x["nom"].value);
    console.log("Email: ", x["email"].value);
    console.log("Message: ", x["message"].value);
    fermerForm();
}

function key() {
    document.addEventListener("keydown", (e) => {
        let key = e.which;
        if (key == "27") {
            fermerForm();
        }
    });
}