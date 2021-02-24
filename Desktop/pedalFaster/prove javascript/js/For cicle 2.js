// JavaScript source code

var scores = [23, 17, "due"];

var arrayLenght = scores.length;

var roundNumber = 0;

var i;

var msg = "";


for (i === 0; i < arrayLenght; i++) {
    roundNumber = i + 1;

    msg += "Round" + roundNumber + ":";

    msg += scores[i] + "<br />";
}

var el = document.getElementById("box");

el.innerHTML = msg;