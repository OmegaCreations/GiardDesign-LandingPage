// setup data
let curr_slide = 2;

// data: wiele możliwości przechowywania takich danych / lepsze przy czystym htmlu ze względu na brak powtarzania kodu
const titles = ["Nowoczesna aranżacja Twojego ogrodu", "Działamy kompleksowo", "Tworzymy ogrody z pasją"];
const subtitles = [
    "Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
];
const pic_urls = ["../src/assets/hero_img.jpg", "../src/assets/hero_teagarden.jpg", "../src/assets/hero_palace.jpg"];

const animation = () => {
    // animation
    $('.slide-text h1').css("transform", "translateY(-50px)").css("filter", "blur(4px)").css("opacity", "0");
    $('.slide-text h3').css("transform", "translateY(-30px)").css("filter", "blur(4px)").css("opacity", "0");
    $('.slide-pic').toggleClass("changed");
    $('.slide-text h1').text(titles[curr_slide]);
    $('.slide-text h3').text(subtitles[curr_slide]);
    setTimeout(()=>{
    $('.slide-pic').css("background-image", `url(${pic_urls[curr_slide]})`);
    }, 150);
    setTimeout(()=>{
        $('.slide-text h1').css("transform", "translateY(0px)").css("filter", "blur(0px)").css("opacity", "1");
        $('.slide-text h3').css("transform", "translateY(0px)").css("filter", "blur(0px)").css("opacity", "1");
        $('.slide-pic').toggleClass("changed");
    }, 300);
}

// slide next
const slide_r = () => {
    curr_slide = curr_slide < titles.length-1 ? curr_slide+1 : 0;
    animation();
}

// slide prev
const slide_l = () => {
    curr_slide = curr_slide-1 < 0 ? titles.length-1 : curr_slide-1;
    animation();
}

// init
let timeoutHandle;
const animTime = 5000; // 5 sec

const slide = () => {
    slide_r();
    timeoutHandle = setTimeout(function() {slide()}, animTime);
}

$(document).ready(() => {
    slide();
})

// Slide buttons
$(".slide-r").on("click", () => {
    clearTimeout(timeoutHandle); // clear timeout to reset slide timer
    slide_r();
    timeoutHandle = setTimeout(function() {slide()}, animTime);
});

$(".slide-l").on("click", () => {
    clearTimeout(timeoutHandle);
    slide_l();
    timeoutHandle = setTimeout(function() {slide()}, animTime);
});