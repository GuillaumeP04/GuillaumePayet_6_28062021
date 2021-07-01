// DOM elements
let navBarBtns = document.getElementsByClassName("nav--bar");
let navBarWrapper = document.getElementsByClassName("nav--wrapper");
let photographeWrapper = document.getElementsByClassName("photographe--wrapper");
let mainWrapper = document.getElementById("main--wrapper");
let portrait = document.getElementsByClassName("portrait");
let art = document.getElementsByClassName("art");
let fashion = document.getElementsByClassName("fashion");
let architecture = document.getElementsByClassName("architecture");
let travel = document.getElementsByClassName("travel");
let sports = document.getElementsByClassName("sports");
let animals = document.getElementsByClassName("animals");
let events = document.getElementsByClassName("events");

// console.log(mainWrapper);
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

function filterSelection(el) {
    if (el == "portrait") {
        for (let i = 0; i< photographeWrapper.length; i++) {
            photographeWrapper[i].style.display = "none";
        }
        console.log(el);
        for (let i = 0; i< portrait.length; i++) {
            portrait[i].style.display = "block";
        }
    }
}

function removeClass() {
    navBarBtns.className += " off";
}

function addClass() {
    navBarBtns.className += " on";
}

console.log();

// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }