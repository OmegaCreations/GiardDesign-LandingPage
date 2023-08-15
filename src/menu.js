$(".burger").on("click", () => {
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