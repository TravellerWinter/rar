// JavaScript source code

$(function(){

    var $text = $("#list").append("<div id=\'text\'>" + "</div>");
    $("#text").css({
        "margin": "+=10",
        "background-color": "#c5a996"
    });
    $("#list li").each(function () {
        var $attributes = this.id;
        $text.append("<p>" + $attributes + "</p>");
    });


});
