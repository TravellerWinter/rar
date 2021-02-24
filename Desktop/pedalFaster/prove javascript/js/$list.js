// JavaScript source code


var $addItem = $("#addItem");
var $textArea = $("#last");
var $submit = $("#submit");
var $text = $("#textArea");
var $list = $("#list");
var $counter = $("#counter");

$textArea.hide();
$addItem.show();

$addItem.on("click", function () {

    $textArea.fadeIn(500);
    $(this).hide();



});

$submit.on("click", function () {

    var $textVal = $text.val();

    $("ul li:last").after("<li>" + $textVal + "</li>");

    $text.val("");

    $textArea.hide();
    $addItem.show();

});

function updateCount() {

    var $complete = $(".complete").length;

    $counter.text($complete);

}

updateCount();

$list.on("click","li", function () {

    var $this = $(this);
    var complete = $(this).hasClass("complete");

    if (complete === true) {
        $this.animate({
            "padding.left": "+=30"
        }, false,"swing", 500);
        $this.fadeOut(400);
        $this.remove();
        updateCount();
    } else {
        var $thisText = $this.text();
        $this.remove();
        $list.append("<li class=\'complete\'>" + $thisText + "</li>");
        updateCount();
    }
    

});
