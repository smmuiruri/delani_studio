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
    $(".column1").hover(function() {
        $(".p1").fadeIn();
    }, function() {
        $(this).stop().animate();
        $(".p1").fadeOut();
    });
    $(".column2").hover(function() {
        $(".p2").fadeIn();
    }, function() {
        $(this).stop().animate();
        $(".p2").fadeOut();
    });
    $(".column1").hover(function() {
        $(".p3").fadeIn();
    }, function() {
        $(this).stop().animate();
        $(".p3").fadeOut();
    });
    $(".column4").hover(function() {
        $(".p4").fadeIn();
    }, function() {
        $(this).stop().animate();
        $(".p4").fadeOut();
    });
    $(".column5").hover(function() {
        $(".p5").fadeIn();
    }, function() {
        $(this).stop().animate();
        $(".p5").fadeOut();
    });
    $(".column6").hover(function() {
        $(".p6").fadeIn();
    }, function() {
        $(this).stop().animate();
        $(".p6").fadeOut();
    });
    $(".column7").hover(function() {
        $(".p7").fadeIn();
    }, function() {
        $(this).stop().animate();
        $(".p7").fadeOut();
    });
    $(".column8").hover(function() {
        $(".p8").fadeIn();
    }, function() {
        $(this).stop().animate();
        $(".p8").fadeOut();
    });
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