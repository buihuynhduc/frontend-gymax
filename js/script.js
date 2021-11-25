$(document).ready(function () {
    const circles = $(".circle");
    const rates = $(".rate");
    for($i=0;$i<circles.length;$i++)
    {
        const rate = rates[$i];
        circles[$i].onclick = function () {
        $(".circle.active").removeClass('active');
        $(".rate.active").removeClass("active");
        $(this).addClass("active");
        $(rate).addClass('active');
        }
    }
    const products = $(".product-inner");
    const tabs = $(".tab-child");
    for($i=0;$i<tabs.length;$i++)
    {
        const product = products[$i];
        tabs[$i].onclick = function () {
        $(".tab-child").removeClass('active');
        $(".product-inner").removeClass("active");
        $(this).addClass("active");
        $(product).addClass('active');
        }
    }
    $('.nav-icon').click(function (e) { 
        e.preventDefault();
        $('.menu').fadeIn(1000);
        $(".cover").fadeIn(2000);
        $(".introduce-inner").fadeOut();
    });
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.menu').fadeOut(1000);
        $(".cover").fadeOut(2000);
        $(".introduce-inner").fadeIn(2000);
    });
});

