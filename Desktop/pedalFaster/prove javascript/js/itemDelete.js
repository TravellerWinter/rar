// JavaScript source code

function eTarget(e) {
    return e.target;
}


function itemDone(e) {

    
    var el = eTarget(e);
    var elParent = el.parentNode;
    elParent.removeChild(el);

}

// e.preventDefault();

var event = document.getElementById("list");

event.addEventListener("click", function (e) {

    itemDone(e);
}
    );