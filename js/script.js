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
    $(".js-tabs-item:visible").fadeOut("200", function () {
      tabLink.children().addClass("m-active");
      target.fadeIn("200", function () {
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


/*==============================================================
     instagramfeed
     ==============================================================*/
     if ($('#instaFeed-style1').length != 0) {
      var instaFeedStyle1 = new Instafeed({
          target: 'instaFeed-style1',
          get: 'user',
          userId: 2348588921,
          limit: '8',
          accessToken: '2348588921.1677ed0.a460325611844430881ec290b0d3d03e',
          resolution: "low_resolution",
          error: {
              template: '<div class="col-12"><span class=text-center>No Images Found</span></div>'
          },
          template: '<div class="col-lg-3 col-md-6 instafeed-style1"><a class="insta-link" href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><div class="insta-counts"><span><i class="ti-heart"></i> <span class="count-number">{{likes}}</span></span><span><i class="ti-comment"></i> <span class="count-number">{{comments}}</span></span></div></a></div>'
      });
      instaFeedStyle1.run();
  }

  if ($('#instaFeed-aside').length != 0) {
      var instaFeedAside = new Instafeed({
          target: 'instaFeed-aside',
          get: 'user',
          userId: 2348588921,
          limit: '6',
          accessToken: '2348588921.1677ed0.a460325611844430881ec290b0d3d03e',
          resolution: "low_resolution",
          error: {
              template: '<div class="col-12"><span class=text-center>No Images Found</span></div>'
          },
          template: '<li><figure><a href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><span class="insta-counts"><i class="ti-heart"></i>{{likes}}</span></a></figure></li>'
      });
      instaFeedAside.run();
  }

  if ($('#instaFeed-footer').length != 0) {
      var instaFeedFooter = new Instafeed({
          target: 'instaFeed-footer',
          get: 'user',
          userId: 2348588921,
          limit: '6',
          accessToken: '2348588921.1677ed0.a460325611844430881ec290b0d3d03e',
          resolution: "low_resolution",
          error: {
              template: '<div class="col-12"><span class=text-center>No Images Found</span></div>'
          },
          template: '<li><figure><a href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><span class="insta-counts"><i class="ti-heart"></i><span>{{likes}}</span></span></a></figure></li>'
      });
      instaFeedFooter.run();
  }