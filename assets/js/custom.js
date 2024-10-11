$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 2.4,
    onTranslate: progressBar
  });

  $(".customNextBtn").click(function () {
    owl.trigger('next.owl.carousel');
  });

  $(".customPrevBtn").click(function () {
    owl.trigger('prev.owl.carousel');
  });

  // Progress Bar
  var progress = 0;
  function progressBar(event) {
    var autoplayTimeout = owl.data('owl.carousel').options.autoplayTimeout;
    var interval = 10;  // Progress bar will update every 10ms
    var total = autoplayTimeout / interval;

    progress = 0;
    $(".c-progress-bar").css("width", "0%");

    var progressInterval = setInterval(function () {
      progress++;
      var width = (progress / total) * 100;
      $(".c-progress-bar").css("width", width + "%");

      if (progress >= total) {
        clearInterval(progressInterval);
      }
    }, interval);
  }
});



// Get the elements
const hamburger = document.querySelector('.toggle-hamburger');
const header = document.querySelector('header');

// Add event listener for click
hamburger.addEventListener('click', function () {
  // Toggle the 'active' class on the <header> element
  header.classList.toggle('open_nav');
});