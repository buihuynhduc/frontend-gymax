$(document).ready(function () {
    $('.nav-icon').click(function (e) { 
        e.preventDefault();
        $('.introduce-inner').hide();;
        $('.cover').fadeIn(2000);
        $('.menu').fadeIn(1000);
    });
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.menu').fadeOut(2000);
        $('.cover').fadeOut(2000);
        $('.introduce-inner').fadeIn(2000);
    });
    $('.tab-child').click(function (e) { 
        e.preventDefault();
        $('.tab-child').removeClass('active');
        $(this).addClass('active');
    });
});


