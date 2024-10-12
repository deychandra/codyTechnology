//====We-serve-carousel
$(document).ready(function () {
  var owl = $(".we-serve .owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 2.4,
    onTranslate: progressBar,
    responsive: {
      0: {
        items: 1.4,
      },
      768: {

        items: 2.4,
      },
      1000: {
        items: 2.4,
      }
    }
  });

  $(".we-serve .customNextBtn").click(function () {
    owl.trigger('next.owl.carousel');
  });

  $(".we-serve .customPrevBtn").click(function () {
    owl.trigger('prev.owl.carousel');
  });

  var progress = 0;
  function progressBar(event) {
    var autoplayTimeout = owl.data('owl.carousel').options.autoplayTimeout;
    var interval = 10;
    var total = autoplayTimeout / interval;

    progress = 0;
    $(".we-serve .c-progress-bar").css("width", "0%");

    var progressInterval = setInterval(function () {
      progress++;
      var width = (progress / total) * 100;
      $(".we-serve .c-progress-bar").css("width", width + "%");

      if (progress >= total) {
        clearInterval(progressInterval);
      }
    }, interval);
  }
});
//====We-serve-carousel





//====hamburger
const hamburger = document.querySelector('.toggle-hamburger');
const header = document.querySelector('header');
hamburger.addEventListener('click', function () {
  header.classList.toggle('open_nav');
});
//====hamburger




// ====case-studies-carousel
$(document).ready(function () {
  var owl = $("#caseSsliderone");
  owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1,
    onTranslate: progressBarnew,
  });

  $(".case-studies .customNextBtn").click(function () {
    owl.trigger('next.owl.carousel');
  });

  $(".case-studies .customPrevBtn").click(function () {
    owl.trigger('prev.owl.carousel');
  });

  var progressnew = 0;
  function progressBarnew(event) {
    var autoplayTimeoutnew = owl.data('owl.carousel').options.autoplayTimeout;
    var intervalnew = 10;
    var total = autoplayTimeoutnew / intervalnew;

    progressnew = 0;
    $(".slider .c-progress-bar").css("width", "0%");

    var progressIntervalnew = setInterval(function () {
      progressnew++;
      var width = (progressnew / total) * 100;
      $(".slider .c-progress-bar").css("width", width + "%");

      if (progressnew >= total) {
        clearInterval(progressIntervalnew);
      }
    }, intervalnew);
  }
});
//====case-studies-carousel


$(document).ready(function () {
$('#casestudiesTwo').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  dots:false,
  items:2.5,
  responsiveClass:true,
  responsive:{
      0:{
          items:2.3,
          
      },
      600:{
          items:2.3,
      },
      1000:{
          items:2.3,
      }
  }
})
});



