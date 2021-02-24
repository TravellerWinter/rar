// JavaScript source code

var msg = '<div id=\"header\"><a  id=\"close\">Close</a></div>';

msg += '<div id=\"box2\"><h2>Server Alert</h2><br />our server is out of service</div>';



var elNote = document.createElement("div");

elNote.setAttribute("id", "note");

elNote.innerHTML = msg;

document.body.appendChild(elNote);


function dismiss() {
    document.body.removeChild(elNote);
}


document.getElementById("close").addEventListener("click", dismiss, false);