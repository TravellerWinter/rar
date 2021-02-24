// JavaScript source code

var i = 19;

var msg = "";

while ( i > -1 && i < 20 ) {

    msg += i + " x 5=" + i * 5 + "<br />";

    i--;
}

var el = document.getElementById("box");

el.innerHTML = msg;

