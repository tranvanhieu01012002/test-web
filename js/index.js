function displayNavbar() {
  if (document.body.clientWidth > 1024) {
    $("#navbar").removeClass("dn");
  } else {
    $("#navbar").addClass("dn");
  }
}

$(document).ready(function () {
  $(".carousel").slick({
    slidesToShow: 1,
    // dots:true,
    centerMode: true,
    arrows: false,
    // centerMode: true,
  });

  $(".projects-list").slick({
    slidesToShow: 3,
    // dots:true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".list-reviews").slick({
    slidesToShow: 2,
    // dots:true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $("#menu-icon").click(() => {
    $("#navbar").toggleClass("dn");
  });

  displayNavbar();

  $("#close-search").click(() => {
    $("#search-bar").addClass("dn");
  });

  $("#icon-watch").click(() => {
    $("#search-bar").removeClass("dn");
  })
});

window.addEventListener("resize", () => {
  displayNavbar();
});
