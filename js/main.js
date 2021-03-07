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

$("#satelites").click(function(e) {
 
    e.preventDefault();
 
    var obj = "#satelites-section";
 
    $('html, body').animate({
        scrollTop: $(obj).offset().top
    }, 1200);
 
});

$("#cursos").click(function(e) {
 
    e.preventDefault();
 
    var obj = "#cursos-section";
 
    $('html, body').animate({
        scrollTop: $(obj).offset().top
    }, 1200);
 
});

$("#carrosel").click(function(e) {
 
    e.preventDefault();
 
    var obj = "#section-carousel";
 
    $('html, body').animate({
        scrollTop: $(obj).offset().top
    }, 1200);
 
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});