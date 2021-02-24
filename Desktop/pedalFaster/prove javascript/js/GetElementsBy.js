// JavaScript source code

var el = document.querySelectorAll("li.hot");

if (el.length > 2) {

    for (var i = 0; i < el.length; i++) {
        var elements = el[i];
        elements.className = "cool";
    }
}

