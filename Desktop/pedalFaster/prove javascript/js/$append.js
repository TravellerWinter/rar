// JavaScript source code


    function createElement() {
        $("#list").append("<li>Cheese</li>")
    }




var button = document.createElement("input");
button.setAttribute("type", "button");


var el = document.getElementById("wrapper");
el.appendChild(button);

button.addEventListener("click", createElement, false);