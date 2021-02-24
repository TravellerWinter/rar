// JavaScript source code

var modal = {
    open: function () {
        
        var model = $(".modal-content");
        model.removeClass("modal-content");
        model.addClass("modal-content2");

    },
    close: function () {
        var model = $(".modal-content2");

        model.removeClass("modal-content2");
        model.addClass("modal-content");

    },
    center: function () { }
};


