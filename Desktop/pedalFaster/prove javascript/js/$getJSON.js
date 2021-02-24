// JavaScript source code

$("body").append("<div id='rates'></div><div id='reload'></div>");

function loadRates() {
    $.getJSON("xhr/$dataJSON.json")
        .done(function (data) {
            var date = new Date();
            var hrs = Date.getHours();
            var min = Date.getMinutes();
            var msg = "<h2>Exchange Rates</h2>";
            $.each(data, function (key, val) {
                msg += "<div class='" + key + "'>" + key + ":" + val + "</div>";
            });
            msg += "<br /><p>Last Update:" + hrs + ":" + min + "</p>";
            $("#rates").html(msg);
        })
        .always(function () {
            var reload = "<a id='refresh' href='#'>Refresh</a>";
            $("#reload").html(reload);
            $("#refresh").on("click", function (e) {
                e.preventDefault();
                loadRates();
            });
        });

}

loadRates();