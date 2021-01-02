/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var nav = document.querySelector("nav");
var ham = document.querySelector(".ham");

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger() {
    nav.classList.toggle("showNav");
    ham.classList.toggle("showClose");
}

ham.addEventListener("click", toggleHamburger);

// submitting thank you onclick event

document.getElementById('submit').onclick = function changeContent() {

    document.getElementById('submit').textContent = "Thank you for subscribing!";
    document.getElementById('submit').style = "height: 6em;";
}

var draaienvanlogo = document.querySelector(" nav ul li img");
draaienvanlogo.addEventListener("click", draaien);

function draaien() {
 draaienvanlogo.classList.toggle("draaien");
}
