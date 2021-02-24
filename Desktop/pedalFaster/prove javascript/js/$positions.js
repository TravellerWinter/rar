// JavaScript source code

var $dates = $("#dates");

var $window = $(window);

var $document = $(document);

$(document).on("mousemove", function () {
    $("#wH").text($window.height());
    $("#wW").text($window.width());
    $("#dH").text($document.height());
    $("#dW").text($document.width());
});