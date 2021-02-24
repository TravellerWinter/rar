// JavaScript source code




function checkUsername(e, minLength) {

   
    var elText = e.target;
    var el = document.getElementById("textbox");

    if (elText.value.length < minLength) {
        el.textContent = "Username must be longer";
    } else {
        el.textContent = "";
    }
}


var elContent = document.getElementById("username");
elContent.addEventListener("blur", function(e) {
    checkUsername(e, 5);
}
    , false);
