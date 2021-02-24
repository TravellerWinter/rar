// Scroll control

var window = document.getElementById("wrapper");
var posts = document.getElementById("posts");
var $description = $("#description");
var $line = $("#line");
var IPostsTop = posts.getBoundingClientRect().top;
var FPostsTop;
var header = document.getElementsByTagName("header")[0];





window.addEventListener("scroll", function () {
    FPostsTop = posts.getBoundingClientRect().top;
    header.style.boxShadow = "0px 1px 4px rgba(0,0,0,0.7)";
    if (IPostsTop === FPostsTop) {
       header.style.boxShadow = "none";
    }
    if ($description.offset().top < 0) {
        header.style.boxShadow = "none";
    }
    
});

