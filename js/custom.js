$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //>=, not <=
    if (scroll >= 70) {  
        $(".nav-bar-js").removeClass("navbar-extended");
    } else {
       $(".nav-bar-js").addClass("navbar-extended");
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



//testimonial 
$(document).ready(function() {        
    $("#testimonial-slider").owlCarousel({
      margin:25,
      nav: true,
      loop: false,
      autoplay:true,
      autoplayTimeout:3000,
      // animateOut: "fadeOut",
      // autoplayHoverPause:true,
      navText: ['<i class="bi bi-chevron-right"></i>','<i class="bi bi-chevron-right"></i>'],
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



//Thumbnail details page
$(document).ready(function() {
  var bigimage = $("#big");
  var thumbs = $("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 4,
    dots: false,
    nav: false,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 4,
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});






//Gallery isotope
$(document).ready(function () {
  var customContainer = jQuery(".iso-container");
  customContainer.isotope({
    filter: "*",
    transitionDuration: "2s",
    animationOptions: {
      duration: 7500,
      queue: false
    },

    // layoutMode: "fitRows",
    // fitRows: {
    //   gutter: 0
    // }
  });

  jQuery("#custom-filter li:first-child > a").addClass("is-checked");

  jQuery("#custom-filter a").click(function () {
    jQuery("#custom-filter .is-checked").removeClass("is-checked");
    jQuery(this).addClass("is-checked");

    var customSelector = jQuery(this).attr("data-filter");
    customContainer.isotope({
      filter: customSelector,
      marginBottom:10,
      transitionDuration: "2s",
      animationOptions: {
        duration: 7500,
        queue: false
      },
      layoutMode: "fitRows",
      fitRows: {
        gutter: 5
      }
    });
    return false;
  });
});
