// JavaScript source code


var scriptResult = document.createElement("div");

var wrapper = document.getElementById("wrapper");

wrapper.appendChild(scriptResult);

var liOne = document.getElementById("one");

if (liOne.hasAttribute("class")) {
   var attr = liOne.getAttribute("class");

   document.getElementsByTagName("div")[1].textContent = attr;
} 