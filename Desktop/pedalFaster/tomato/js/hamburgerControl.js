// Hamburger control

var hamburger = document.getElementById("hamburger");
var logo = document.getElementById("logo");
var logoHeight = logo.offsetHeight;
var hamburgerH = hamburger.offsetHeight;

hamburger.style.top = ((logoHeight / 2) - (hamburgerH / 2)) + "px";
hamburger.style.left = ((logoHeight / 2) - (hamburgerH / 2)) + "px";


window.addEventListener("resize", function () {
    hamburger = document.getElementById("hamburger");
    logo = document.getElementById("logo");
    logoHeight = logo.offsetHeight;
    hamburgerH = hamburger.offsetHeight;
    hamburger.style.top = ((logoHeight / 2) - (hamburgerH / 2)) + "px";
    hamburger.style.left = ((logoHeight / 2) - (hamburgerH / 2)) + "px";
});