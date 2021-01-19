$(document).ready(getDimension);
$(window).on('resize', getDimension);

function getDimension() {
  var height = $(".article-meta h1").outerHeight(true) + $(".article-meta h2").outerHeight(true) + $(".article-meta h2").innerHeight()  + "px";
  document.documentElement.style.setProperty('--bg-height', height);
  // var width = $("main").width()  + "px";
  // document.documentElement.style.setProperty('--bg-width', width);
}
