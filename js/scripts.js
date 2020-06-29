$(document).ready(function() {
    $(".icon-design").hover(function() {
        $("#hover-design").toggle();
        $("#design-toggle").toggle();
    })
    $(".icon-development").hover(function() {
        $("#hover-development").toggle();
        $("#development-toggle").toggle();
    })
    $(".icon-product").hover(function() {
        $("#hover-product").toggle();
        $("#product-toggle").toggle();
    })
})
$(document).ready(function() {
    $(".column").hover(function() {
        $(".layer1").addClass("overlay");
    })
})
$(document).ready(function() {
    $(".contact form").submit(function() {
        var name = $("#name").val();
        if (name == "") {
            alert("Enter your name")
            return false;
        }
        var email = $("#email").val();
        if (email == "") {
            alert("Enter Email address")
            return false
        }
        var message = $("#contact-message").val();
        if (message == "") {
            alert("Enter message")
            return false
        }
    })
})