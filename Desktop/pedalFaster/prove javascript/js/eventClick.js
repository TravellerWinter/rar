// JavaScript source code


function createObject() {
    var el = document.createElement("div");
    var elText = document.createTextNode("");
    el.appendChild(elText);
    var parent = document.getElementById("wrapper");
    parent.appendChild(el);
    el.setAttribute("id", "box");
}

var eventNode = document.querySelector("input");

eventNode.onclick = createObject;