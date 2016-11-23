$(document).ready(function(){
    var $loanValue = $("#value");
    var $loanYears = $("#years");
    var $paymentTotal = $("#total");
    var $money = 1000;
    var $months = 1;
    var $rate;
    var $menuNav = $('.navbar li');
    var $bars = $(".menu-bars i");

    $('.sliderMoney').slider({
        max: 60000,
        min: 1000,
        step: 100,
        change: function( event, ui ) { }
    });

    $('.sliderYears').slider({
        max: 96,
        min: 1,
        change: function( event, ui ) { }
    });


    function calculatorMoney(){
        $( ".sliderMoney" ).on( "slidechange", function( event, ui ) {
            var $userMoney = ui.value;
            $loanValue.text($userMoney);
            $money = Number($loanValue.text());
            $rate = Math.round($money/$months * 1.02);
            $paymentTotal.text($rate);
        });
    }
    function calculatorMonth(){
        $( ".sliderYears" ).on( "slidechange", function( event, ui ) {
            var $userTime = ui.value;
            $loanYears.text($userTime);
            $months = Number($loanYears.text());
            $rate = Math.round($money/$months * 1.02);
            $paymentTotal.text($rate);
        });
    }

    calculatorMoney();
    calculatorMonth();

    $bars.on("click", function(){
        $menuNav.slideToggle()
        $menuNav.toggleClass("active");
    });
});
