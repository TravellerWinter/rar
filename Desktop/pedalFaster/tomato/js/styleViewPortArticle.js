// JavaScript source code

var el1;
var el2;
var articles = $("article");
var copy = articles;


if (innerWidth >= 780) {
    el1 = '<div id="el1"></div>';
    el2 = '<div id="el2"></div>';
    $("#post").append(el1, el2);
    for (var i = 0; i < Math.trunc(articles.length / 2); i++) {

        $("#el1").append(articles[i]);
    }
    for (i = Math.trunc(articles.length / 2); i < articles.length; i++) {
        $("#el2").append(articles[i]);
    }
}

function resize() {

    if (innerWidth >= 780) {
        el1 = '<div id="el1"></div>';
        el2 = '<div id="el2"></div>';
        $("#post").append(el1, el2);
        for (var i = 0; i < Math.trunc(articles.length / 2); i++) {

            $("#el1").append(articles[i]);
        }
        for (i = Math.trunc(articles.length / 2); i < articles.length; i++) {
            $("#el2").append(articles[i]);
        }
    } else {
        $("#post").append(articles)
        $("#el1").remove();
        $("#el2").remove();
    }

}


window.addEventListener("resize", resize);