$(document).ready(function(){
  var $loanValue = $("#value");
  var $loanYears = $("#years");
  var $paymentTotal = $("#total");
  var $money = $loanValue.text();
  var $months = $loanYears.text();
  var $count = $money/$months * 1.02;
  var $menuNav = $('.navbar li');
  var $bars = $(".menu-bars i");
  console.log($bars);

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
    $loanValue.text(ui.value);
    $paymentTotal.text($count);
  } );
}
function calculatorMonth(){
  $( ".sliderYears" ).on( "slidechange", function( event, ui ) {
    $loanYears.text(ui.value);
    $paymentTotal.text($count);
  } );
  }

  calculatorMoney();
  calculatorMonth();

  $bars.on("click", function(){
    $menuNav.toggleClass("active");
  });
});
