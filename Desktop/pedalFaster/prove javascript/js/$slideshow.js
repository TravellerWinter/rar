// JavaScript source code


var $image = $("#image");
var $next = $("#next");
var $previous = $("#previous");
var timeout;

function next() {
    switch ($image.attr("src")) {

        case "images/deviazione.jpg":
            $image.removeAttr("src");
            $image.attr("src", "images/polinesia.jpg");
            break;
        case "images/polinesia.jpg":
            $image.removeAttr("src");
            $image.attr("src", "images/zodiaco.jpg");
            break;
        case "images/zodiaco.jpg":
            $image.removeAttr("src");
            $image.attr("src", "images/deviazione.jpg");
            break;
        default:
            $("#slideShow").text("Cazzo");

    }
}

$next.on("click", function () {

    switch ($image.attr("src")) {

        case "images/deviazione.jpg":
            $image.removeAttr("src");
            $image.attr("src", "images/polinesia.jpg");
            break;
        case "images/polinesia.jpg":
            $image.removeAttr("src");
            $image.attr("src", "images/zodiaco.jpg");
            break;
        case "images/zodiaco.jpg":
            $image.removeAttr("src");
            $image.attr("src", "images/deviazione.jpg");
            break;
        default:
            $("#slideShow").text("Cazzo");

    }

});

$previous.on("click", function () {

    switch ($image.attr("src")) {

        case "images/deviazione.jpg":
            $image.removeAttr("src");
            $image.attr("src", "images/zodiaco.jpg");
            break;
        case "images/zodiaco.jpg":
            $image.removeAttr("src");
            $image.attr("src", "images/polinesia.jpg");
            break;
        case "images/polinesia.jpg":
            $image.removeAttr("src");
            $image.attr("src", "images/deviazione.jpg");
            break;
        default:
            $("#slideShow").text("Cazzo");

    }

});

function advance() {
    timeout = setInterval(next, 4000);
   
}

advance();