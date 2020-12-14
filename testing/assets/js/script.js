$("#button-card-1").click(function () {
    $('#info-1').slideDown();
    $('#button-card-1').css('display', 'none');
    $('#button-card-11').css('display', 'initial');
});

$("#button-card-11").click(function () {
    $('#info-1').slideUp();
    $('#button-card-1').css('display', 'initial');
    $('#button-card-11').css('display', 'none');
});

$("#button-card-2").click(function () {
    $('#info-2').slideToggle();
});

$("#button-card-3").click(function () {
    $('#info-3').slideToggle();
});

$("#button-card-4").click(function () {
    $('#info-4').slideToggle();
});
$("#button-card-5").click(function () {
    $('#info-5').slideToggle();
});
$("#button-card-6").click(function () {
    $('#info-6').slideToggle();
});
