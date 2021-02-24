// JavaScript source code

var today = new Date();

var hours = today.getHours();

var msg;

if (hours > 17) {
    msg = "Buona sera";
} else if (hours > 12) {
    msg = "Buon pomeriggio";
} else if (hours > 22) {
    msg = "Buona notte ";
} else {
    msg = "Buongiorno";
}

var el = document.getElementById("greetings");

el.innerHTML = "<p>" + msg + "</p>";