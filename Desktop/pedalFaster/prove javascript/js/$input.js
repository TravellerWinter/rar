// JavaScript source code


var $addItem = $("#addItem");
var $textArea = $("#textArea");
var $submit = $("#submit");

$textArea.hide();
$submit.hide();

$addItem.on("click", function () {
    $addItem.hide();
    $textArea.show();
    $submit.show();
});


$submit.on("click", function (e) {
    e.preventDefault();
    var valText = $("#textArea").val();
    $("#list").append("<li>" + valText + "</li>");
    $textArea.hide();
    $submit.hide();
    $textArea.val("");
    $addItem.show();
});