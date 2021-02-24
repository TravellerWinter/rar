// JavaScript source code

var note, noteInput, target, textEntered, recordButton;

note = document.getElementById("audioNote");
noteInput = document.getElementById("nodeText");

function writeText(e) {

    target = e.target;
    textEntered = target.value;     //.value perche l'elemento è input e dunque non ha figli testuali
    note.textContent = textEntered;

}

noteInput.addEventListener("keyup", writeText, false);

recordButton = document.getElementById("recordButtonDiv");

function record(target) {
    target.setAttribute("src", "images/recordButton-pause.png");
}

function stop(target) {
    target.setAttribute("src", "images/recordButton-record.png");

}


function recordControls(e) {
    target = e.target;
    switch (target.getAttribute("src")) {

        case "images/recordButton-record.png":
             record(target);
             break;
         case "images/recordButton-pause.png":
             stop(target);
             break;
     }
}


recordButton.addEventListener("click", function (e) {
    recordControls(e);
}, false);

