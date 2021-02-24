// JavaScript source code

var xhr = new XMLHttpRequest();

xhr.onload = function () {
    var response = JSON.parse(xhr.responseText);

    var msg = "";
    for (var i = 0; i < response.events.length; i++) {
        msg += "<div>";
        msg += "<img src='" + response.events[i].map + "' />";
        msg += "<p>" + response.events[i].location + "</p>";
        msg += "</div>";
    }
    document.getElementById("ajaxSpace").innerHTML = msg;
};

xhr.open("GET", "xhr/dataJSON.json", true);
xhr.send(null);