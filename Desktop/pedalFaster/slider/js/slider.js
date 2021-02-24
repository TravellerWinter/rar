
var $img;
var $photoViewer = $("#photo-viewer");
var thumb = $(".thumb");

$thumb.on("click", function (e) {

    e.preventDefaul();
    var href = this.href;

    $("img").remove();

    $img = '<img src="' + href + '" />';
    $photoViewer.append($img);
});
