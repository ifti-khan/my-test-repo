$("#button-card-1").click(function () {
    $('#info-1').slideDown();
    $('#button-card-1').hide();
    $('#button-card-11').show();
});

$("#button-card-11").click(function () {
    $('#info-1').slideUp();
    $('#button-card-1').show();
    $('#button-card-11').hide();
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

$("#elec").click(function () {
    if ($('input[name=elec]:checked').length > 0) {
        $('.category_electric').show();
    } else {
        $('.category_electric').hide();
    }
});

$("#car").click(function () {
    if ($('input[name=car]:checked').length > 0) {
        $('.category_car').show();
    } else {
        $('.category_car').hide();
    }
});

$("#builder").click(function () {
    if ($('input[name=builder]:checked').length > 0) {
        $('.category_builder').show();
    } else {
        $('.category_builder').hide();
    }
});

$("#reset").click(function () {
    $('.card').show();
});
