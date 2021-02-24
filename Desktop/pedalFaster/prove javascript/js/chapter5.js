// JavaScript source code

var list = document.getElementsByTagName("ul").item(0);

var newItem = document.createElement("li");

var newItemText = document.createTextNode("kale");

newItem.appendChild(newItemText);

list.insertBefore(newItem, list.firstChild);

var li = document.querySelectorAll("li");


    for (var i = 0; i < li.length; i++) {
        li[i].className = "cool";
    }


var heading = document.querySelector("h2");

var headingText = heading.firstChild.nodeValue; 

var total = li.length;

heading.innerHTML = headingText + " <span>" + total + "</span>";