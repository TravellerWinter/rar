// JavaScript source code



    var el = document.getElementById("list");

    function createObject() {
        var newEl = document.createElement("li");
        var newText = document.createTextNode("");
        newEl.appendChild(newText);
        el.appendChild(newEl);
        newEl.setAttribute("id", "box");
    }
    el.addEventListener("click", createObject);

    $("#list").on("click", ":not(#four)", function (e) {


        var target = e.target;
        var box = $("#box");
        var eventName = "<br />" + e.type;
        var tText = target.textContent;
        $("#box").html(tText + eventName);























});