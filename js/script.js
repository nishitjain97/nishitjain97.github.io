function init(windowWidth) {
    if(windowWidth > 600) {
        $("a#a-burger").addClass("burger-left");
    }
    else {
        $("a#a-burger").removeClass("burger-left");
    }
    
    $("a#a-burger").css('display', 'block');
    $(".overlay-content").css('height', '0%');
}

function toggleNav(fsToggle) {
    if(fsToggle) {
        $(".overlay").css('height', '0%');
        fsToggle = false;
        
        $(".overlay-content a").each(function() {
            $(this).css('transition-delay','0ms');
            $(this).removeClass('vis');
        });
        
        $(".overlay-content").css('height', '0%');
        
        $("#hamburger").removeClass('no-bord');
        $("#hamburger #bar-2").removeClass('hide');
        $("#hamburger #bar-1").removeClass('turnleft');
        $("#hamburger #bar-3").removeClass('turnright');
    }
    else {
        $(".overlay").css('height', '100%');
        fsToggle = true;
        
        $(".overlay-content a").each(function(index) {
            $(this).css('transition-delay',(index * 100) + 'ms');
            $(this).addClass('vis');
        });
        
        $(".overlay-content").css("height", '');
        
        $("#hamburger").addClass('no-bord');
        $("#hamburger #bar-2").addClass('hide');
        $("#hamburger #bar-1").addClass('turnleft');
        $("#hamburger #bar-3").addClass('turnright');
    }
    return fsToggle;
}

$(document).ready(function() {
    var bannerTop = $("#banner").scrollTop();
    var bannerBottom = bannerTop + $("#banner").height();
    var fsToggle = false;
    
    var windowWidth = $(window).width();
    
    $(window).resize(function() {
        windowWidth = $(window).width();
        
        if(windowWidth < 600) {
            $("a#a-burger").removeClass("burger-left");
        }
        else {
            $("a#a-burger").addClass("burger-left");
        }
    });
    
    init(windowWidth);
    
    $("a#a-burger").click(function() {
        fsToggle = toggleNav(fsToggle);
    });
    
    $(document).scroll(function() {
        var screenTop = $(document).scrollTop();
        
        if(windowWidth > 600) {
            if(screenTop > bannerBottom - 150) {
                $("#top").addClass("nav-anime");
                $("a#a-burger").removeClass("burger-left");
            }
            else {
                $("#top").removeClass("nav-anime");
                $("a#a-burger").addClass("burger-left");
            }
        }
            
        if(fsToggle) {
            fsToggle = toggleNav(fsToggle);
        }
    });
});