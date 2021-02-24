// JavaScript source code

$("li").on("click", function () {

    $(this).animate({
        paddingLeft: "+=80"
    },
        {queue: false},
        800,
        "linear",
        

    );
    $(this).fadeOut(770);
});