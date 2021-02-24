// JavaScript source code

var button = document.getElementById("input");
var xhr = new XMLHttpRequest;

button.addEventListener("click", function () {

    var response = xhr.responseText; // anche con xhr.response l'output rimane invariato


    xhr.onload = function () {
        document.getElementById("content").innerHTML = response;
    };
    

    xhr.open("GET", "xhr/dataPHP.php", true);
    xhr.send(null);



});