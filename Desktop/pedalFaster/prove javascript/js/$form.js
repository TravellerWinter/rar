// JavaScript source code


var $form = $("#psw");

$form.on("click", function () {
    var $this = $(this);
    $this.animate({
        borderLeftWidth: "+=1",
        borderLeftStyle: "solid",
        borderLeftColor: "rgba(0,0,0,0.3)",
        borderRightWidth: "+=1",
        borderRightStyle: "solid",
        borderRightColor: "rgba(0,0,0,0.3)",
        borderTopWidth: "+=1",
        borderTopStyle: "solid",
        borderTopColor: "rgba(0,0,0,0.3)"
    }, 3000, "swing");
});


var $form2 = $("#text");

$form2.on("click", function () {
    var $this = $(this);
    $this.animate({
        borderLeftWidth: "+=1",
        borderLeftStyle: "solid",
        borderLeftColor: "rgba(0,0,0,0.3)",
        borderRightWidth: "+=1",
        borderRightStyle: "solid",
        borderRightColor: "rgba(0,0,0,0.3)",
        borderTopWidth: "+=1",
        borderTopStyle: "solid",
        borderTopColor: "rgba(0,0,0,0.3)"
    }, 3000, "swing");
});
