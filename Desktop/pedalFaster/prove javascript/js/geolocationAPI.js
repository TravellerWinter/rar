// JavaScript source code


var input = document.getElementsByTagName("input")[0];
var text = document.getElementById("ajaxSpace");
var msg = "";
input.addEventListener("click", function () {

    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(success, fail);
        text.textContent = "Getting current position...";

    } else {
        text.textContent = "cazzo";
    }

    function success(position) {
        msg += "<h3>Longitude:<br />";
        msg += position.coords.longitude + "</h3>";
        msg += "<h3>Latitude:<br />";
        msg += position.coords.latitude + "</h3>";
        text.innerHTML = msg;
    }

    function fail() {
        text.textContent = "sorry, we could not find your position";
    }






});