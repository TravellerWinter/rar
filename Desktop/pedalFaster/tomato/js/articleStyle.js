// stile articoli

var headerH = document.getElementsByTagName("header")[0].offsetHeight;
var description = document.getElementById("description").offsetHeight;
var article = document.getElementsByClassName("article");

for (var i = 0; i < article.length; i++) {
    article[i].style.maxHeight = `${(innerHeight - (headerH + description)) * 1.5}px`;
}

