window.onscroll = function () {
    scrollFunction();
  };

function scrollFunction() {
    // secNav.style.display = "none";
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ){
      secNav.style.display = "block";
      navbar.style.display = "none";
    //   $("#secNav").fadeIn("slow");
    }else {
      secNav.style.display = "none";
      navbar.style.display = "block";
    }
}
