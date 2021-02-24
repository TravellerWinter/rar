// JavaScript source code

var itemTwo = document.getElementById("two");

var elText = itemTwo.firstChild.nodeValue;

elText = elText.replace("pine nuts", "Kale");

itemTwo.firstChild.nodeValue = elText;

