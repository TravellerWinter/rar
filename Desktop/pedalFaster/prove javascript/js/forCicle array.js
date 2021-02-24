// JavaScript source code


var scores = [23, 45, 58];
var arrayLength = scores.length;
var roundNumber = 0;
var msg = "";
var i=0;

for (i; i < arrayLength; i++) {                  // la variabile i può essere dichiarata sia all'interno del ciclo sia fuori

    roundNumber = i + 1;

    msg += "Round " + roundNumber + ": ";

    msg += scores[i] + "<br />";


}

document.getElementById("box").innerHTML = msg;

/* 

  si potrebbe anche utilizzare questo:

  document.getElementById("box").innerHtml = msg;

  In questo modo la variabile el viene oltrepassata
  
*/