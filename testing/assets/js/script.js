/*This block of code is for my card tiles for each business*/
$(document).ready(function () {
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
});

/*This block of code here is for my refine search checkboxes*/
$(document).ready(function () {

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

});

/*This block of code is for the refine search dropdown button, when clicked it will display the dropdown menu*/
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/*This block of code is for the Pagination next and previous buttons and also the page indicator*/
$(document).ready(function () {
    pageSize = 1;
    var i = 1;
    showPage = function (page) {
        $(".pages").hide();
        $(".pages").each(function (n) {
            if (n >= pageSize * (page - 1) && n < pageSize * page)
                $(this).show();
        });
    }

    showPage(i);

    $("#prev").click(function () {
        $('.pgnum').find('#pgnum.active').prev().addClass('active');
        $('.pgnum').find('#pgnum.active').next().removeClass('active');
        if (i > 1) {
            showPage(--i);
        }
    });
    $("#next").click(function () {
        $('.pgnum').find('#pgnum.active').next().addClass('active');
        $('.pgnum').find('#pgnum.active').prev().removeClass('active');
        if (i < ($('.pages').length) / 1) {
            showPage(++i);
        }
    });

});

function darkTheme() {
    let element = document.body;
    element.classList.toggle("darkbody");
}
