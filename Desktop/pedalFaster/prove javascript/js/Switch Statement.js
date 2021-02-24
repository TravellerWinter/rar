// JavaScript source code


var msg;
var level = "two";

switch (level) {

    case "one":
        msg = "Great start, keep going!";
        break;

    case "two":
        msg = "you pass all the tests, congratulation!!"
        break;
}

var el = document.getElementById("box");

el.textContent = msg;