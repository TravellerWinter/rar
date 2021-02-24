// JavaScript source code







$(function () {


$("h2").hide().slideDown(800);
$("#list li").hide().each(function (index) {
    $(this).delay(700 * index).fadeIn();
});

$("li").on("click", function () {

    $(this).fadeOut(700);

});

});