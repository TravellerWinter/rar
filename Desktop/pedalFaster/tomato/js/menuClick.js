// menu orizzontale

var banner = document.getElementById("banner");
var flexArrow = document.getElementById("img");

hamburger.addEventListener("click", function () {
    banner.style.display = "flex";
    banner.style.position = "fixed";
    banner.style.top = "0px";
    banner.style.left = "0px";
    banner.style.width = (innerWidth / 2) + "px";
    banner.setAttribute("class", "slide-in-left");
    hamburger.setAttribute("class", "scale-out-center");
    flexArrow.setAttribute("class", "rotate-90-cw");
});

flexArrow.addEventListener("click", function () {
    banner.setAttribute("class", "slide-out-left");
    hamburger.removeAttribute("class");
    hamburger.setAttribute("class", "scale-in-center");
    flexArrow.setAttribute("class", "rotate-90-ccw");
});