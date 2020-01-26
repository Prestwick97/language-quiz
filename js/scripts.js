$(document).ready(function() {

  
  $("form#language").on("submit", function(event) {
    event.preventDefault();
    var shape = $("#shape").val();
    var animal= $("#animal").val();
    var author = $("#author").val();
    var baby = $("#baby").val();
    var money = $("#money").val();
    if(shape == "1" && animal == "a" && author == "i" && baby == "5" && money == "e") {
    $("#python").show();
    }
    
    else if(shape == "2" && animal == "b" && suthor == "j" && baby == "6" && money == "f") {
    $("C").show();
    }

    else {
      $("java").show();
    }
  });

});