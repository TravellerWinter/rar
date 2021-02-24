// JavaScript source code

var firstItem = document.getElementById("one");

var pContent = firstItem.innerHTML;

firstItem.innerHTML = "<a href= 'google.com'>" + pContent + "</a>";
