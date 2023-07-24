! function () {
  "use strict";
  $("#menu-close").click(function (a) {
    a.preventDefault(), $("#sidebar-wrapper").toggleClass("active")
  }), $("#menu-toggle").click(function (a) {
    a.preventDefault(), $("#sidebar-wrapper").toggleClass("active")
  }), $(".isotom_lant").magnificPopup({
    delegate: "a",
    type: "image"
  }), $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
        var a = $(this.hash);
        if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html,body").animate({
          scrollTop: a.offset().top
        }, 1e3), !1
      }
    })
  }), $(window).load(function () {

    $("#loader").fadeOut(), $("#mask").delay(1e3).fadeOut("slow")
  }), $(document).scroll(function () {
    $(document).scrollTop() >= 500 ? ($(".navbar").addClass("navbar-fixed-top"), $("html").addClass("has-fixed-nav")) : ($(".navbar").removeClass("navbar-fixed-top"), $("html").removeClass("has-fixed-nav"))
  }), $(".animated").appear(function () {
    var a = $(this),
      e = a.data("animation");
    if (!a.hasClass("visible")) {
      var t = a.data("animation-delay");
      t ? setTimeout(function () {
        a.addClass(e + " visible")
      }, t) : a.addClass(e + " visible")
    }
  }), $(document).ready(function () {
    $("#tab-container").easytabs()
    var resbox = $('#wrapper');

    $( "#wrapper .voiceLink a" ).on( "click", function(e) {
      e.preventDefault();
      var link = $(this).prop('href'),
          audio = $('.audioControl', resbox);
  
      audio.find('source').prop('src', link);
      audio.find('source').prop('muted', 'muted');
      audio.parent().css('display', 'inline-block');
      audio.find('audio').load();
      setTimeout(audio.find('audio')[0].play(), 100);
    });
    $(window).click(function(e) {
      $('.voiceLink a').trigger('click');
  });
    setTimeout(() => {
      $('.voiceLink a').trigger('click');
     },500) 
  })
}(jQuery);