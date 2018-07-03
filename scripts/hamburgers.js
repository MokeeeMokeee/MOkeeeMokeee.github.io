$(document).ready(function () {
    $(".menu-trigger").click(function () {
        $(this).toggleClass("active");
        $('ul li').each(function (i) {
            $(this).delay(80 * i).fadeIn(500);
        });
    });
});

$(document).ready(function () {
    $(".drawer").drawer();
});


$(function(){
    $("drawer-open").bind('drawer-close', function(){
        $(".menu-trigger").toggleClass("active");
        $('ul li').each(function (i) {
            $(this).delay(80 * i).fadeIn(500);
        });
    });
});