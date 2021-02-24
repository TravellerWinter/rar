// stile colore


var color = document.getElementsByClassName("color");
var m1;


for (var i = 0; i < color.length; i++) {
    m1 = Math.round(Math.random() * 10);
    if (m1 <= 2) {
        color[i].style.backgroundColor = "hsla(173, 70%, 35%, 1)";
    } else {
        if (m1 <= 4) {
            color[i].style.backgroundColor = "hsla(326, 12%, 12%, 1)";

        } else {
            if (m1 <= 6) {
                color[i].style.backgroundColor = "hsla(59, 100%, 75%, 1)";
            } else {
                if (m1 <= 8) {
                    color[i].style.backgroundColor = "hsla(18, 100%, 72%, 1)";
                } else {
                    color[i].style.backgroundColor = "hsla(355, 78%, 60%, 1)";
                    
                }
            }
        }
    }
    color[i].style.height = innerHeight * 0.1 + "px";
    
}
