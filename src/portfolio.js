// load pictures into DOM
const loadPics = (start, end, source) => {
    for(var i = start; i < end+1; i++){
        $('#macy-container').append(`<a class="new-child" data-mfp-src=${source+'p'+i+'.png'} title="2023 Ogród: ${i}"><img src=${source+'p'+i+'.png'} /></a>`);
    }

    Macy({
        container: '#macy-container',
        columns: 3,
        trueOrder: false,
        waitForImages: false,
        margin: {
            x: 43,
            y: 42
        },
        breakAt: {
            1200: 3,
            520: 2,
            400: 1
        }
    });

    $('#macy-container a').css("opacity", "1");
}

//  remove pictures from DOM
const removePics = (count) => {
    for(var i = 1; i < count; i++){
        $('#macy-container').find("a:last").remove();
    }

    Macy({
        container: '#macy-container',
        columns: 3,
        trueOrder: false,
        waitForImages: false,
        margin: {
            x: 43,
            y: 42
        },
        breakAt: {
            1200: 3,
            520: 2,
            400: 1
        }
    });
}

$(document).ready(function() {

    const source = "../src/assets/portfolio/"; // source folder with photos named p1.png, p2.png etc...
    var pic_count = 9; // last pic count / można zmienić przy większej ilości dostępnych zdjęć
    var curr_count = 4; // current number loaded on page
    var loaded = false; // loaded new photos?

    loadPics(1, curr_count, source); // load first pics
    
    // setup popup gallery
    $('#macy-container').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title');
        }
      }
    });

    // load more portfolio's photos
    $('.portfolio button').on('click', () => {

        if(!loaded) {
            loadPics(curr_count + 1, pic_count, source);
            $(".portfolio button p").text("Zwiń");
            $(".portfolio button svg").css("transform", "rotate(180deg)");
        }
        else {
            removePics(pic_count - curr_count + 1);
            $(".portfolio button p").text("Rozwiń");
            $(".portfolio button svg").css("transform", "rotate(0deg)");
        }

        loaded = !loaded;

        $(".shadow").toggleClass("hidden");
    });

});
