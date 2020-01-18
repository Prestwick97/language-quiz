$(document).ready(function() {

  
  $("form#language").on("submit", function(event) {
    event.preventDefault();
    var animal= $("#animal").val();
    var shape = $("#shape").val();
    var author = $("#author").val();
    var baby = $("#baby").val();
    var money = $("#money").val();
    if("1" && "a" && "i" && "5" && "e")
    $("#python").show();
    // else if (shape === "2" && animal === "b" &&author ==="j" && baby ==="6" && money === "f")
    // $("#java").show();
    else if("2" && "b" && "j" && "6" && "f")
    $("C").show();
    else $("java").show();
  });

});