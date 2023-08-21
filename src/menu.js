$(".burger").on("click", () => {
    $(".burger-menu").toggleClass('hidden');
});

$(".burger-menu a").on("click", () => {
    $(".burger-menu").toggleClass('hidden');
});

$(".burger-menu .offer .nav-item").on("click", () => {
    $(".burger-menu .drop").toggle("fast");
    $(".burger-menu .offer svg").toggleClass('rotate');
    $(".burger-menu .offer svg").toggleClass('rotate-reset');
})

$(".default-menu .offer").hover(() => {
    $(".default-menu .offer svg").toggleClass('rotate');
    $(".default-menu .offer svg").toggleClass('rotate-reset');
})

$('a[href^="#search"]').click(function(e) {
    e.preventDefault()

    $("#search-box").toggleClass("hidden");
    setTimeout(function() {
    inputSearch.focus();
    }, 800);
});

$('a[href^="#close"]').click(function(e) {
    e.preventDefault()
    $("#search-box").toggleClass("hidden");
});


$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    var $id = $(id);
    
    if ($id.length === 0) {
        return;
    }

    e.preventDefault();
    var pos = $id.offset().top;

    $('body, html').animate({scrollTop: pos}, 500);
});