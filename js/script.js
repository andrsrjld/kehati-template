$(function () {
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
  $(".js-tabs-link").on("click", function (e) {
    e.preventDefault();
    var tabLink = $(this);
    var target = $(this.hash);
    $(".js-tabs-text").removeClass("m-active");
    $(".js-tabs-item:visible").fadeOut("fast", function () {
      tabLink.children().addClass("m-active");
      target.fadeIn("fast", function () {
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

  $(function () {
    $('read-more').click(function () {
        $('#datalist li:hidden').slice(0, 2).show();
        if ($('#datalist li').length == $('#datalist li:visible').length) {
            $('read-more').hide();
        }
    });
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Selengkapnya";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Sembunyikan";
    moreText.style.display = "inline";
  }
}