$(document).ready(function () {
  //====We-serve-carousel
  var owlWeServe = $(".we-serve .owl-carousel");
  owlWeServe.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 2.4,
    onTranslate: progressBarWeServe,
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
    owlWeServe.trigger('next.owl.carousel');
  });

  $(".we-serve .customPrevBtn").click(function () {
    owlWeServe.trigger('prev.owl.carousel');
  });

  var progressWeServe = 0;
  var progressIntervalWeServe;
  function progressBarWeServe(event) {
    clearInterval(progressIntervalWeServe);

    var autoplayTimeout = owlWeServe.data('owl.carousel').options.autoplayTimeout;
    var interval = 10;
    var total = autoplayTimeout / interval;

    progressWeServe = 0;
    $(".we-serve .c-progress-bar").css("width", "0%");

    progressIntervalWeServe = setInterval(function () {
      progressWeServe++;
      var width = (progressWeServe / total) * 100;
      $(".we-serve .c-progress-bar").css("width", width + "%");

      if (progressWeServe >= total) {
        clearInterval(progressIntervalWeServe);
      }
    }, interval);
  }

  //====Case-studies-carousel
  var owlCaseStudies = $("#caseSsliderone");
  owlCaseStudies.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1,
    onTranslate: progressBarCaseStudies
  });

  $(".case-studies .customNextBtn").click(function () {
    owlCaseStudies.trigger('next.owl.carousel');
  });

  $(".case-studies .customPrevBtn").click(function () {
    owlCaseStudies.trigger('prev.owl.carousel');
  });

  var progressCaseStudies = 0;
  var progressIntervalCaseStudies;
  function progressBarCaseStudies(event) {
    clearInterval(progressIntervalCaseStudies);

    var autoplayTimeout = owlCaseStudies.data('owl.carousel').options.autoplayTimeout;
    var interval = 10;
    var total = autoplayTimeout / interval;

    progressCaseStudies = 0;
    $(".case-studies .c-progress-bar").css("width", "0%");

    progressIntervalCaseStudies = setInterval(function () {
      progressCaseStudies++;
      var width = (progressCaseStudies / total) * 100;
      $(".case-studies .c-progress-bar").css("width", width + "%");

      if (progressCaseStudies >= total) {
        clearInterval(progressIntervalCaseStudies);
      }
    }, interval);
  }

  //====casestudiesTwo-carousel
  $('#casestudiesTwo').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    items: 2.5,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1.3,
      },
      600: {
        items: 2.3,
      },
      1000: {
        items: 2.3,
      }
    }
  });

  //====hamburger
  const hamburger = document.querySelector('.toggle-hamburger');
  const header = document.querySelector('header');
  hamburger.addEventListener('click', function () {
    header.classList.toggle('open_nav');
  });
});





const section = document.querySelector('.our-experts');


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !section.classList.contains('start-animation')) {
     
      section.classList.add('start-animation');
    }
  });
});

// Start observing the section
observer.observe(section);
window.addEventListener('load', () => {
  const rect = section.getBoundingClientRect();
  const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
  if (isVisible && !section.classList.contains('start-animation')) {
    section.classList.add('start-animation');
  }
});




// Contact-us-scroll
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top < window.innerHeight && rect.bottom > 0
  );
}
function handleScroll() {
  const contactSection = document.querySelector('.contact-us');

  if (isInViewport(contactSection)) {
      contactSection.classList.add('contact-us-show');
  } else {
      contactSection.classList.remove('contact-us-show');
  }
}


window.addEventListener('scroll', handleScroll);
handleScroll();




// Sticky-header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});



// Scroll-to-top

const scrollToTopButton = document.querySelector('.scroll-to-top');

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
