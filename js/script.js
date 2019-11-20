$(function() {
  $(".js-semua").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false
  });

  $(".js-kehutanan").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false
  });

  $(".js-pertanian").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false
  });

  $(".js-kelautan").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false
  });

  $(".js-kampanye").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false
  });

  $(".js-indeks").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false
  });

  $(".js-tabs-item:not(:first)").hide();
  $(".js-tabs-link").on("click", function(e) {
    e.preventDefault();
    var tabLink = $(this);
    var target = $(this.hash);
    $(".js-tabs-text").removeClass("m-active");
    $(".js-tabs-item:visible").fadeOut("200", function() {
      tabLink.children().addClass("m-active");
      target.fadeIn("200", function() {
        $(".js-kehutanan").slick("setPosition", 0); // modified here
        $(".js-pertanian").slick("setPosition", 0); // modified here
        $(".js-kelautan").slick("setPosition", 0); // modified here
        $(".js-kampanye").slick("setPosition", 0); // modified here
        $(".js-indeks").slick("setPosition", 0); // modified here
      });
    });
    console.log('TAP tab-link');
  });
  $(".js-indeks").slick("setPosition", 0);
  $(".js-kampanye").slick("setPosition", 0);
  $(".js-kelautan").slick("setPosition", 0);
  $(".js-pertanian").slick("setPosition", 0);
  $(".js-kehutanan").slick("setPosition", 0);
  $(".js-semua").slick("setPosition", 0);

});