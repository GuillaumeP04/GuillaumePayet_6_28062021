// DOM elements
let navBarBtns = document.getElementsByClassName("nav--bar");


// Listener
for (let i = 0; navBarBtns.length > i; i++) {
    navBarBtns[i].addEventListener("click", navBarFilter);
}
// Functions
function navBarFilter() {
    for (let i = 0; navBarBtns.length > i; i++) {
        navBarBtns[i].onclick = function() {
            navBarBtns[i].style.backgroundColor = '#901C1C';
            navBarBtns[i].style.color = 'white';
        }
    }
}