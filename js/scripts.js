$(document).ready(function() {
  // $("ol").on("click", "li", function() {
  //   console.log(this);
  //   $(this).next().slideToggle();
  // }
  
  $("form#language").on("submit", function(event) {
    event.preventDefault();
    if("1"==="a")
    $("#css").show();
    else ($("#java").show());
  });

});