window.onscroll = function () {
    scrollFunction();
  };

function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ){
      secNav.style.display = "block";
      navbar.style.display = "none";

    }else {
      secNav.style.display = "none";
      navbar.style.display = "block";
    }
}

$("#carouselExampleIndicators").carousel({interval: 2500});
