// JavaScript source code

var xhr = new XMLHttpRequest();

xhr.onload = function () {

    document.getElementById("ajaxSpace").innerHTML = xhr.responseText;

};


xhr.open("GET", "xhr/data.html", true);

xhr.send(null);