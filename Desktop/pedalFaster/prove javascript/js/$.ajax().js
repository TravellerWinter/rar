// JavaScript source code

$("input").on("click", function () {

    var url = "xhr/data.html";

    $.ajax({


        type: "GET",
        url: url,
        timeout: 2000,
        beforeSend: function () {
            $("#content").html("<div>Loading</div>");
        },
        complete: function () {
            $("#content:first-child").remove();
        },
        success: function (data) {
            $("#content").html($(data)).hide().fadeIn(3000);
        },
        error: function () {
            $("#content").html("cazzo");
        }

});




});