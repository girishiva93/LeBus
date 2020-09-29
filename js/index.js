const tl = gsap.timeline();

var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var line3 = document.querySelector(".line3");

gsap.to(".black_container", 0, {css:{visibility:'visible'}});
tl.to(".black", 1.6, {height:0, stagger: .4}, 'Start');

tl.staggerFrom([line1, line2, line3], 1, {
    opacity: 0,
    y: 44,
    delay: .8
}, .15, 'Start')
.from(".company_name", 1 , {
    opacity: 0,
    y:44,
})

function displayList(){
    var responsive = document.getElementById('nav-responsive-items');
    responsive.classList.toggle("nav-responsive-active")
  }
  // owl carousel js start
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin:70,
      nav: true,
      autoplay: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      responsiveClass: true,
      responsive: {
        0: {
          items: 3,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 10,
        },
      },
    });
      // Custom Button
    $(".my-next-button").click(function() {
        owl.trigger("next.owl.carousel");
    });
    $(".my-previous-button").click(function() {
        owl.trigger("prev.owl.carousel");
    });
  });
  // owl carousel js end

  // disable right click
  document.addEventListener('contextmenu', event => event.preventDefault());