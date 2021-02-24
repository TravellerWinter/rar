// JavaScript source code

function setContent() {
    var $mEl = $("#list li");
    $mEl.attr("class", 'content, cool');
}


var input = document.getElementById("button");

input.addEventListener("click", setContent, false);