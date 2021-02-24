

var xhr = new XMLHttpRequest();

xhr.onload = function () {


    if (xhr.status === 200) {

    

        responseObject = JSON.parse(xhr.responseText);

        var msg = "";
        for (var i = 0; i < responseObject.events.length; i++) {

            msg += "<div class='events'>";
            msg += "<img src='" + responseObject.events[i].map + "' />";
            msg += "<p>" + responseObject.events[i].location + "</p>";
            msg += "</div>";

        }

        document.getElementById("ajaxSpace").innerHTML = msg;

    }


};

xhr.open("GET", 'data/dataJSON.json', true);
xhr.send(null);