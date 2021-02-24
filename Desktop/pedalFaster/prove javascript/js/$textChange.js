// JavaScript source code

$(function () {
    $("#list li").addClass("cool");
    $("#list li").html(function () {
        return "<em>" + $(this).text() + "</em>";
    });
    $("#four").remove();
});