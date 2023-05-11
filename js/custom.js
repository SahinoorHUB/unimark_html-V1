$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //>=, not <=
    if (scroll >= 70) {  
        $(".navbar").removeClass("navbar-extended");
    } else {
       $(".navbar").addClass("navbar-extended");
    }
  });


//Vanta js
VANTA.CLOUDS({
    el: "#cloud-vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    skyColor: 0xb1b1b1,
    cloudColor: 0x96c2d9,
    cloudShadowColor: 0x435465,
    sunGlareColor: 0xff3f00,
    speed: 1.20
})

$(document).ready(function() {        
    $("#testimonial-slider").owlCarousel({
      margin:25,
      nav: true,
      loop: false,
      autoplay:true,
      autoplayTimeout:3000,
      // animateOut: "fadeOut",
      // autoplayHoverPause:true,
      navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
      responsive: {
       0: {
            items: 1
          },
          481: {
            items: 1
          },
          849: {
            items: 2
          },
          1200: {
            items: 2
          },
      }
    });
  })