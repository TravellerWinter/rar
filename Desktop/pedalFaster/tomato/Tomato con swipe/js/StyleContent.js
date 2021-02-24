// JavaScript source code


var content = document.getElementById("content");
var windowH = innerHeight;
var contentW = content.offsetWidth;
var contentH = content.offsetHeight;

content.style.top = (windowH - contentH) + "px";

content.style.width = innerWidth + "px";


   