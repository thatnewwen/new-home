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
});
