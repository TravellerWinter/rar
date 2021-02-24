// JavaScript source code

var $imgs = $("#gallery img");
var src = $("#search");
var $gallery = $("#gallery");
var imgs = document.getElementById("last");
var gallery = document.getElementById("gallery");
var cache = [];

$imgs.each(function () {
    cache.push({
        element: this,
        text: this.alt.trim().toLowerCase()
    });
});

function filter() {
    $imgs.hide();
    var query = this.value.trim().toLowerCase();
    var index = 0;
    cache.forEach(function (img) {
        
        if (query) {
            var gallery = document.getElementById("gallery");
            index = img.text.indexOf(query);  
            if (index > -1) {
                var el = img.element;
                $gallery.append(el);
                el.style.display = "";
            } else {
                var errorMsg = document.createElement("div");
                errorMsg.setAttribute("class", "error");
                var galleryE = document.getElementsByClassName("error");
                gallery.appendChild(errorMsg);
                if (galleryE.length > 1) {
                    for (var i = 0; i < galleryE.length; i++) {
                        errorMsg.textContent = "Nessun risultato trovato";
                        var toRemove = galleryE[i];
                        gallery.removeChild(toRemove);
                    }
                }
            }
        }

    });
  
}

src.on("input", filter);

console.log(cache);