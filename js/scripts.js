$(document).ready(function() {
  $("ol").on("click", "li", function() {
    console.log(this);
    $(this).next().slideToggle();
  });