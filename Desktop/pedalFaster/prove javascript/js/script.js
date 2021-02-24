

var score1 = 2; //primo punteggio
var score2 = 5; //secondo punteggio
var passed1 = 10;
var passed2 = 1;


var player = ( (score1 > passed1) || (score2> passed2) );            // 

var msg = "<p> the match was passed:" + player + "<p/>";

var el = document.getElementById("box");

el.innerHTML = msg;