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

// function showGreet(){
//   var dt = new Date();
//   var time = dt.getHours();

//   if (time > 0 && time < 10) {
//     $('#tampilsalam').html('<div>pagi</div>');
//   }
// }

$(document).ready(function() {
var dt = new Date($.now());
var time = dt.getHours();

if (time > 0 && time < 10) {
  $('#tampilsalam').html('<span class="text" >Selamat pagi,</span>');
} else if (time >= 10 && time < 15) {
  $('#tampilsalam').html('<span class="text">Selamat siang,</span>'); 
} else if (time >= 15 && time < 19) {
  $('#tampilsalam').html('<span class="text">Selamat sore,</span>'); 
}else if (time >= 19 && time < 24) {
  $('#tampilsalam').html('<span class="text">Selamat malam,</span>'); 
}
})

$("#carouselExampleIndicators").carousel({interval: 2500});
