// JavaScript source code


var $window = $(window);
var $slideAd = $("#slideAd");
var $document = $(document);


var endZone = $("#four").offset().top - $window.height();

$window.on("scroll", function () {

    if ((endZone) < $document.scrollTop()) {

        $slideAd.animate({ "color": "red" }, 250);

    } else {
        $slideAd.stop(true).animate({ "color": "black" });
    }















});