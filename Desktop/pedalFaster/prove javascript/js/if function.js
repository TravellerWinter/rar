// JavaScript source code


var score1 = 20;
var score2 = 70;

var msg;


function congratulate() {
    msg = 'Congratulations';
    msg += ' proceed to the next round';
}


if (score1 < score2) {
    congratulate();
}

var el = document.getElementById('box');

el.textContent = msg;