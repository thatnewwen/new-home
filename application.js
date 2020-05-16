$(document).ready(function() {
  function adjustSideHeader() {
    //check if the headline is visible
    if ($(".vert-text").length > 0) {
      var headline = $(".vert-text")[0];
      var stringLength = headline.textContent.length;
      //add style tag to support media queries
      document.querySelector("style").textContent +=
        ".vert-text { margin-bottom: " +
        stringLength * 23.5 +
        "px; -webkit-transition: margin-bottom 2s; transition: margin-bottom 2s;}";
    }
  }
  const circleType = new CircleType(document.getElementById("circle"));

  setTimeout(adjustSideHeader, 300);

  $(".right").on("scroll", function() {
    if ($(this).scrollLeft() == 0) {
      $(this).removeClass("visibleBack");
      $(this)
        .closest(".background")
        .find(".back")
        .css("display", "none");
    }

    if ($(this).scrollLeft() != 0 && !$(this).hasClass("visibleBack")) {
      $(this).addClass("visibleBack");
      $(this)
        .closest(".background")
        .find(".back")
        .css("display", "block");
    }
  });

  $(".scroll").click(function() {
    console.log("hello");
    $(this)
      .closest(".right")[0]
      .scrollTo({
        top: 0,
        left: 1000,
        behavior: "smooth"
      });
  });

  $(".sidebar").click(function() {
    $(this)
      .siblings(".right")[0]
      .scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
  });
});
