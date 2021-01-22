// window.addEventListener('DOMContentLoaded', (event) => {

// (() => {
  var today = new Date();
  var month = today.getMonth() + 1;
  
  // Spring
  if (month >= 3 && month <= 5) {
    var imgsurl =
      'url("/img/bg-img/cherry-blossom.jpg")';
  }
  // Summer
  else if (month >= 6 && month <= 8) {
    var imgsurl =
      'url("/img/bg-img/lotus.jpg")';
  }
  // Autumn
  else if (month >= 9 && month <= 11) {
    var imgsurl =
      'url("/img/bg-img/ginkgo-tree.jpg")';
  }
  // Winter
  else {
    var imgsurl =
      'url("/img/bg-img/Wintersolstice.jpg")';
  }

  document.documentElement.style.setProperty("--bgurl", imgsurl);

// })();

// });

// $(document).ready(function(){
//   $("body").wrapInner('<div class="page" style="background-color: rgb(233, 246, 241);"></div>'); 
// });

