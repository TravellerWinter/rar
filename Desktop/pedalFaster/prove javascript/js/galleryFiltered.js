// JavaScript source code

var $imgs = $("#gallery img");
var $buttons = $("#buttons");

var tagged = {};

$imgs.show();
$imgs.each(function () {
    var img = this;
    var tags = $(this).data("tags");


    if (tags) {
        tags.split(",").forEach(function (tagName) {
            if (tagged[tagName] == null) {
                tagged[tagName] = [];
            }
            tagged[tagName].push(img);
        });
    }



});

console.log(tagged);

$.each(tagged,function (tagName) {
    var button = document.createElement("div");
    var href = document.createElement("a");
    
    href.setAttribute("href", '""');
    button.appendChild(href);
    href.setAttribute("data-tag", tagName);
    button.setAttribute("class", "button");
    href.textContent = tagName + " (" + tagged[tagName].length + ")";
    $buttons.append(button);
  

    button.addEventListener("click", function () {
        $imgs.hide().filter(tagged[tagName]).show();

    });
    
});

var button = document.createElement("div");
var href = document.createElement("a");
href.setAttribute("href", '""');
button.appendChild(href);
href.textContent = "view all";
button.setAttribute("class", "button");
$buttons.append(button);
href.addEventListener("click", function () {
    $imgs.show();
});