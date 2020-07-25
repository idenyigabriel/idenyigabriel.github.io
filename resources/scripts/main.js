$('#nav-wrapper a[href*="#"]').click(function (event) {
        // On-page links
        var offset = 80;
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - offset
                }, 1500);
            }
        }
    });


$('#skills').waypoint(function (direction) {
    if (direction == "down") {
        $('#wayup').removeClass('animated fadeOutRight')
        $('#wayup').addClass('animated fadeInRight')
        $('#wayup').show()
    } else {
        $('#wayup').removeClass('animated fadeInRight')
        $('#wayup').addClass('animated fadeOutRight')
    }
}, {
    offset: '10px;'
});


$('#wayup').on('click', function (e) {
    e.preventDefault();
    $('body, html').animate({
        scrollTop: 0
    }, 1500)
})