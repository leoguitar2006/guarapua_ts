$("#drones").click(function(e) {
 
    e.preventDefault();
 
    var obj = "#drones-section";
 
    $('html, body').animate({
        scrollTop: $(obj).offset().top
    }, 1200);
 
});

$("#contato").click(function(e) {
 
    e.preventDefault();
 
    var obj = "#contato-section";
 
    $('html, body').animate({
        scrollTop: $(obj).offset().top
    }, 1200);
 
});