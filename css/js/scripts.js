$(document).ready(function() {
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#carouselButton').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#carouselButton').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    $('#loginModalButton').click(function() {
        $('#loginModal').modal();
        $('#loginModal').modal('show');
    });

    $('#reserveTableModalButton').click(function() {
        $('#reserveTableModal').modal();
        $('#reserveTableModal').modal('show');
    });
});