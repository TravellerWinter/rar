// JavaScript source code


var score1 = 20;

var score2 = 40;


if (score1 < score2) {
    congratulate();
}

function congratulate (){
    var msg = "Congratulations";
    msg += "proceed to the next round";
}

var el = document.getElementById("box");

el.textContent = congratulate();