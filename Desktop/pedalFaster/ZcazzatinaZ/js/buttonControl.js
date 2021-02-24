// JavaScript source code

var button = document.getElementsByClassName("button")[0]
var load = document.getElementById("load");
var loading = document.getElementById("loading");
var pop = document.getElementById("popup");

// controllo pulsante accensione

button.addEventListener("click", function () {
    load.style.display = "block";
    loading.style.display = "block";
    setTimeout(popup, 5000, load, loading);
    
});



function popup(l, ll) {
    l.style.display = "none";
    ll.style.display = "none";
    pop.style.visibility = "inherit";
}



// controllo close

var close = document.getElementById("close");

close.addEventListener("click", function () {

    pop.style.visibility = "hidden";

});