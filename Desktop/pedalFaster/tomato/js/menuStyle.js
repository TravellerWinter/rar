// posizione menù

var img = document.getElementById("hamburger");
var WIDTH_PROPORTIONAL = 360;
var PERC_PROPORTIONAL = 39.6;
var widthMenu = (PERC_PROPORTIONAL * innerWidth) / 360;

// impostazione grandezza

img.style.width = widthMenu + "px";

window.addEventListener("resize", function () {
    widthMenu = (PERC_PROPORTIONAL * innerWidth) / 360;

    img.style.width = widthMenu + "px";
});


