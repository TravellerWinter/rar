// JavaScript source code

var sX = document.getElementById("sX");
var sY = document.getElementById("sY");
var pX = document.getElementById("pX");
var pY = document.getElementById("pY");
var cX = document.getElementById("cX");
var cY = document.getElementById("cY");



function showPosition(event) {
    sX.textContent = event.screenX;
    sY.textContent = event.screenY;
    pX.textContent = event.pageX;
    pY.textContent = event.pageY;
    cX.textContent = event.clientX;
    cY.textContent = event.clientY;
}

var el = document.getElementById("wrapper");
el.onmousemove = showPosition;