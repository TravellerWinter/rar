// JavaScript source code

var $button = $("#ajaxSpace input");
$button.on("click", function () {
    return modal.open();
});

var $cancel = $("#button input");

$cancel.on("click", function () {

    return modal.close();

});
