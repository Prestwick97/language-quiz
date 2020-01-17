$(document).ready(function() {

  
  $("form#language").on("submit", function(event) {
    event.preventDefault();
    var animal= $("#animal").val();
    var shape = $("#shape").val();
    if(shape === "1" && animal === "a")
    $("#css").show();
    else ($("#java").show());
  });

});