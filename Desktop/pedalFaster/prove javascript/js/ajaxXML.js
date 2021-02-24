

var xhr = new XMLHttpRequest();

xhr.onload = function ()  {

    var response = xhr.responseXML;
    var events = response.getElementsByTagName("event");

    for (var i = 0; i < events.length; i++) {

        var container, img, location;

        container = document.createElement("div");
        container.className = "event";

        img = document.createElement("img");
        img.setAttribute("src", getNodeValue(events[i], "map"));
        container.appendChild(img);

        location = document.createElement("div");
        location.appendChild(document.createTextNode(getNodeValue(events[i], "location")));
        container.appendChild(location);


        document.getElementById("ajaxSpace").appendChild(container);




    }


function getNodeValue(obj, tag) {
        return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}



};



xhr.open("GET", "xhr/dataXML.xml", true);

xhr.send(null); 