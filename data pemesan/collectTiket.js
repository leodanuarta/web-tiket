var delay = 1000;

$(window).on('load', function() {
    setTimeout(function(){
        $("#background-loading").css("opacity","0");
        $("#background-loading").css("visibility","hidden");
        $("#background-loading").css("transition","visibility 0s 1s, opacity 0.5s linear");
    },delay);
});

