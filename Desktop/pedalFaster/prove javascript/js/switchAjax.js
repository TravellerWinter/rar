// JavaScript source code

var input = document.getElementById("input");
var xhr = new XMLHttpRequest();


input.addEventListener("keydown", function () {

    switch (input.value) {
        case "html":
            xhr.onload = function () {
                document.getElementById("content").innerHTML = xhr.responseText;
            };
            xhr.open("GET", "xhr/data.html", true);
            xhr.send(null); 
            break;
        case "xml":
            xhr.onload = function () {
                var response = xhr.responseXML;
                var events = response.getElementsByTagName("event");
                var div, image, location;
                for (var i = 0; i < events.length; i++) {
                    div = document.createElement("div");
                    image = document.createElement("img");
                    image.setAttribute("src", getData("map"));
                    div.appendChild(image);
                    location = document.createElement("p");
                    location.textContent = getData("location");
                    div.appendChild(location);
                    document.getElementById("content").appendChild(div);
                }
                function getData(tag) {
                   return response.getElementsByTagName(tag)[i].textContent;
                }
            };
            xhr.open("GET", "xhr/dataXML.xml", true);
            xhr.send("null");
            break;
        case "JSON":
            xhr.onload = function () {
                var response = xhr.responseText;
                var responseO = JSON.parse(response);
                var msg = "";
                var div, image, Location;
                for (var i = 0; i < responseO.events.length; i++) {
                    div = document.createElement("div");
                    image = document.createElement("img");
                    image.setAttribute("src", responseO.events[i].map);
                    div.appendChild(image);
                    Location = document.createElement("p");
                    Location.textContent = responseO.events[i].location;
                    div.appendChild(Location);
                    document.getElementById("content").appendChild(div);
                }
            };
            xhr.open("GET", "xhr/dataJSON.json", true);
            xhr.send(null);
            break;
        case "s":
            document.getElementById("content").textContent = "cazzo";
    }





}); 