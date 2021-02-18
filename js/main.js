$("#drones-e-satelites").click(function(e) {
 
    e.preventDefault();
 
    var obj = "#drones-satelites";
 
    $('html, body').animate({
        scrollTop: $(obj).offset().top
    }, 1200);
 
});