// Cache the Window object
var $window = $(window);

// Parallax Backgrounds
// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641

$('section[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object
    
    $(window).scroll(function() {
    
        // Scroll the background at var speed
        // the yPos is a negative value because we're scrolling it UP!								
        var yPos = -($window.scrollTop() / $bgobj.data('speed'));
        
        // Put together our final background position
        var coords = '50% '+ yPos + 'px';
        
        // Move the background
        $bgobj.css({ backgroundPosition: coords });
        
    }); // end window scroll
});

$(document).ready(function () {

    $('.tab').click(function() {
        // Get rel name
        var panel = $(this).attr('rel');
    
        // Remove and add class active-tab
        $('.tab').removeClass('active-tab');
        $(this).addClass('active-tab');
        
        // Remove and add class show-content
        $('.content').removeClass('show-content');
        $('.content[rel="'+panel+'"]').addClass('show-content');
    });
});

function scrollSpy() {

    var sections = ['sec1', 'sec2', 'sec3', 'sec4', 'sec5'];
    var current;

    for (var i = 0; i < sections.length; i++) {
        if ( $('#'+sections[i]).offset().top <= $(window).scrollTop() ) {
        current = sections[i];
        }
    }

    $("nav a[href='#"+current+"']").addClass('active');
    $("nav a").not("a[href='#"+current+"']").removeClass('active');      
}

    // smooth scrolling navigation
$("nav a").click( function() {
    var target = $(this).attr("href");

    $("body, html").animate({ scrollTop: $(target).offset().top }, 1000);

    return false;
});

//scrollSpy call
$(document).ready( function() {scrollSpy(); });
$(window).scroll( function() {scrollSpy(); }); 