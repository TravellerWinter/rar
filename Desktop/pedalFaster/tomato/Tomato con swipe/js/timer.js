// timer


var minute = 25;
var second = 0;
var coutMinute = minute;
var totMinute = coutMinute; // controllo per pausa lunga
var totSecond;
var percent;
var start = 1; // 0 = attivo, 1 = fermo
var _break = 0; // 0 = work, 1 = rest
var _longBreak = 1; // 0 = long break, 1 = no long break
var t;
var tomatoes = 1;
var tomatoesCounter = document.getElementById("tomatoes");
var idTimer = $("#timer");
var values = document.getElementById("values");
var startButton = document.getElementById("button");

var _zero = document.getElementById("zero");
var snd;


values.innerHTML = minute + ":0" + second;  //imposta il valore iniziale 

startButton.addEventListener("click", function () {  //controllo per avvio/pausa
    if (start === 1) {
        avvio();
        tomatoesCounter.hidden = false;
        tomatoesCounter.textContent = tomatoes;
        document.getElementById("button").setAttribute("src", "images/Repeat Grid 1@2x.png");

        
    } else {
        document.getElementById("button").setAttribute("src", "images/Polygon 1@2x.png");
        stop();
    }
    
   
});

$("#plus").on("click", function () {
    minute = minute + 5;
    coutMinute = minute;
    totMinute = coutMinute;
    values.innerHTML = minute + ":0" + second;
});

$("#minus").on("click", function () {
    minute = minute - 5;
    coutMinute = minute;
    totMinute = coutMinute;
    values.innerHTML = minute + ":0" + second;
});

_zero.addEventListener("click", to_zero);  // controllo per azzeramento

function to_zero() {
    minute = 25;
    coutMinute = minute;
    second = 0;
    totMinute = 25;
    tomatoes = 1;
    _break = 0;
    _longBreak = 1;
    tomatoesCounter.innerHTML = tomatoes;
    tomatoesCounter.hidden = true;
    values.innerHTML = minute + ":0" + second;
    idTimer.css("background", "linear-gradient(0deg, rgba(255, 158, 121, 0.4) " + 0 + "%, rgba(0, 0, 0, 0) 0% )");
    $("#plus").show();
    $("#minus").show();
    document.getElementById("button").setAttribute("src", "images/Polygon 1@2x.png");
    
    stop();
}

function avvio() {
    start = 0;
    $("#plus").hide();
    $("#minus").hide();
    timer();
}

function stop() {
    start = 1;
    clearTimeout(t);
    
}

function timer() {

    if (start === 0) {
        
        if (second === 0) {

            second = 59;
            minute = minute - 1;

        } else {
            second = second - 1;
            
        }
        values.innerHTML = minute + ":" + second;
        if (second < 10) {
            values.innerHTML = minute + ":0" + second;
        } 
        if (minute < 10) {
            values.innerHTML = "0" + minute + ":" + second;
        }
        if (minute < 10 && second < 10) {
            values.innerHTML = "0" + minute + ":0" + second;
        }

        // controllo per pausa
        if (minute === 0 && second === 0) {
            tomatoesCounter.hidden = false;
            _longBreak = 1;
            switch (_break) {
                case 0:
                    _break = 1;
                    minute = 5;
                    second = 0;
                    snd = new Audio("audios/PING_Sound_effect.mp3");
                    snd.play();
                    break;
                case 1:
                    minute = coutMinute;
                    second = 0;
                    _break = 0;
                    tomatoes++;
                    tomatoesCounter.textContent = tomatoes;
                    snd = new Audio("audios/PING_Sound_effect.mp3");
                    snd.play();
                    break;

            } 
            totMinute += minute;
        }

        // fine pomodoro

        if (totMinute > coutMinute * 4 + 5 * 3) {
            minute = 30;
            second = 0;
            totMinute = 0;
            tomatoes = 0;
            tomatoesCounter.hidden = true;
            _break = 1;
            _longBreak = 0;
        }

        // animations
        if (_break === 0) {
            totSecond = coutMinute * 60 - (minute * 60 + second);
            var percent1 = coutMinute * 60;
            var percent2 = totSecond / percent1;
            var percent3 = percent2 * 100;
            idTimer.css("background", "linear-gradient(0deg, rgba(255, 158, 121, 0.4) " + percent3 + "%, rgba(0, 0, 0, 0) 0% )");
        } else {
            if (_longBreak === 0) {
                totSecond = 30 * 60 - (minute * 60 + second);
                percent = (totSecond / 1800) * 100;
                idTimer.css("background", "linear-gradient(0deg, rgba(255, 158, 121, 0.4) " + percent + "%, rgba(0, 0, 0, 0) 0% )");
            } else {
                totSecond = 5 * 60 - (minute * 60 + second);
                percent = (totSecond / 300) * 100;
                idTimer.css("background", "linear-gradient(0deg, rgba(255, 158, 121, 0.4) " + percent + "%, rgba(0, 0, 0, 0) 0% )");
            }
        }
        

        
    }
    t = setTimeout(timer, 1000);
    console.log(totMinute);
}


