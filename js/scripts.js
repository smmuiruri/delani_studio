$(document).ready(function() {
    $(".icon-design").click(function() {
        $("#hover-design").toggle(1000);
        $("#design-toggle").toggle();
    })
    $(".icon-development").click(function() {
        $("#hover-development").toggle(1000);
        $("#development-toggle").toggle();
    })
    $(".icon-product").click(function() {
        $("#hover-product").toggle(1000);
        $("#product-toggle").toggle();
    })
})