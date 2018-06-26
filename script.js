function init() {
    $("a#a-burger").addClass("burger-left");
}

$(document).ready(function() {
    var bannerTop = $("#banner").scrollTop();
    var bannerBottom = bannerTop + $("#banner").height();
    
    init();
    
    $(document).scroll(function() {
        var screenTop = $(document).scrollTop();
        
        if(screenTop > bannerBottom - 150) {
            $("#top").addClass("nav-anime");
            $("a#a-burger").removeClass("burger-left");
        }
        else {
            $("#top").removeClass("nav-anime");
            $("a#a-burger").addClass("burger-left");
        }
    });
});