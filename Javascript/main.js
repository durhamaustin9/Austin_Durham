$(document).ready(function()  {
    var width = window.innerWidth;
    var height = window.innerHeight;

    $('html').resize(function(){

        var width = window.innerWidth;
        var height = window.innerHeight;

        if (width >= 768) {
            this.close();
        }
    });
});

var delay = 500;

function compressNav(x) {
    x.classList.toggle("change");

    if ($(".Navbar").css("height") === "100px") {
        this.open();
    } else {
        this.close();
    }
}

function close() {
    $(".Navbar").css("height", "100");

    $(".ul").css("height", "100px");

    $(".navbar-underly").animate({
        height: "100px",
        opacity: ".8"
    }, {
        duration: "2000"
    });

    $(".navbaritem").fadeOut("fast");

    setTimeout(function () {
        $(".navbaritem").css("display", "");
        $(".ul").css("height", "")
    }, delay);
}

function open() {
    $(".Navbar").css("height", "342px");

    $(".ul").css("height", "342px");

    $(".navbar-underly").animate({
        height: "342px",
        opacity: ".91"
    }, {
        duration: "2000"
    });

    $(".navbaritem").fadeIn("slow")
}