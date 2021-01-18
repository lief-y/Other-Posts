$(document).ready(getHeight);
$(window).on('resize', getHeight);

function getHeight() {
  var height = $(".article-meta h1").outerHeight(true) + $(".article-meta h2").outerHeight(true) + $(".article-meta h2").innerHeight()  + "px";
  document.documentElement.style.setProperty('--bg-height', height);
}
