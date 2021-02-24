// JavaScript source code

var newEl = document.createElement("li");

var newText = document.createTextNode("quinoa");

newEl.appendChild(newText);

var el = document.getElementsByTagName("ul")[0];

el.appendChild(newEl);