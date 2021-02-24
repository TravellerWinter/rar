// JavaScript source code

var i = 1;
var number = 3;
var operator = "addiction";
var msg = "";

if (operator === "addiction") {
    while (i < 11) {
        msg += i + "+" + number + "=" + (i + number) + "<br />";
        i++;
    }
} else {
    while (i < 11) {
        msg += i + "x" + number + "=" + i * number + "<br />";
        i++;
    }
}

document.getElementById("box").innerHTML = msg;