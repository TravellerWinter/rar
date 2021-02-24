// controllo stile




setInterval(function () {
    var $windowwidth = $(window).width();
    var $h1 = $("#h1");
    var $client = $("#client");
    var $description = $("#description");

    if ($windowwidth <= 1300) {
        $h1.detach();
        $client.append($h1);
    } else {
        $h1.detach();
        $description.prepend($h1);

    }
}, 100);

